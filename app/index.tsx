import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

// Define interfaces for CSV data
interface Question {
  Subject: string;
  Question: string;
  QuestionImage?: string;
  OptionA?: string;
  OptionAImage?: string;
  OptionB?: string;
  OptionBImage?: string;
  OptionC?: string;
  OptionCImage?: string;
  OptionD?: string;
  OptionDImage?: string;
  CorrectAnswer: string;
  Explanation?: string;
}

interface RawCSVRow {
  [key: string]: string;
}

// CSV loading and parsing functions
async function loadLocalCSVAsync(localModule: any): Promise<string> {
  try {
    const asset = Asset.fromModule(localModule);
    await asset.downloadAsync();
    const uri = asset.localUri || asset.uri;
    if (!uri) {
      throw new Error("Failed to resolve asset URI");
    }
    return FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.UTF8 });
  } catch (error) {
    console.error("Error loading CSV asset:", error);
    throw error;
  }
}

function parseCSV(text: string): RawCSVRow[] {
  const rows: string[][] = [];
  let cur = "";
  let row: string[] = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (c === '"' && next === '"') {
        cur += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        cur += c;
      }
    } else {
      if (c === '"') {
        inQuotes = true;
      } else if (c === ",") {
        row.push(cur);
        cur = "";
      } else if (c === "\n" || c === "\r") {
        if (cur.length > 0 || row.length) {
          row.push(cur);
          rows.push(row);
          row = [];
          cur = "";
        }
        if (c === "\r" && next === "\n") i++;
      } else {
        cur += c;
      }
    }
  }
  if (cur.length > 0 || row.length) {
    row.push(cur);
    rows.push(row);
  }

  if (!rows.length) return [];
  const header = rows[0].map((h) => h.trim());
  return rows.slice(1).map((cells) => {
    const obj: RawCSVRow = {};
    header.forEach((h, idx) => (obj[h] = (cells[idx] ?? "").trim()));
    return obj;
  });
}

const opt = (s: string | undefined): string | undefined =>
  s && s.trim().length ? s.trim() : undefined;

// Props for the Option component
interface OptionProps {
  keyName: string;
  label?: string;
  imageUri?: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [idx, setIdx] = useState<number>(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const csvText = await loadLocalCSVAsync(require("./assets/questions.csv"));
        const parsed = parseCSV(csvText);
        const cleaned: Question[] = parsed
          .filter((q) => q.Question && q.CorrectAnswer)
          .map((q) => ({
            Subject: opt(q.Subject) ?? "General",
            Question: q.Question,
            QuestionImage: opt(q.QuestionImage),
            OptionA: opt(q.OptionA),
            OptionAImage: opt(q.OptionAImage),
            OptionB: opt(q.OptionB),
            OptionBImage: opt(q.OptionBImage),
            OptionC: opt(q.OptionC),
            OptionCImage: opt(q.OptionCImage),
            OptionD: opt(q.OptionD),
            OptionDImage: opt(q.OptionDImage),
            CorrectAnswer: (q.CorrectAnswer || "").trim().toUpperCase(),
            Explanation: opt(q.Explanation),
          }));
        setQuestions(cleaned);
      } catch (e: any) {
        console.error("CSV load/parse error:", e);
        setError(`Failed to load questions: ${e.message}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const q = questions[idx];
  const total = questions.length;

  useEffect(() => {
    setSelectedKey(null);
    setIsCorrect(null);
  }, [idx]);

  const progress = useMemo(() => {
    if (!total) return 0;
    return ((idx + 1) / total) * 100;
  }, [idx, total]);

  const handleSelect = (key: string) => {
    if (!q || selectedKey) return;
    setSelectedKey(key);
    setIsCorrect(q.CorrectAnswer === key);
  };

  const Option: React.FC<OptionProps> = ({ keyName, label, imageUri }) => {
    const chosen = selectedKey === keyName;
    const isRight = q?.CorrectAnswer === keyName;

    let classes = "flex rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-3 mb-2";
    if (selectedKey) {
      if (chosen && isCorrect) classes = "flex rounded-2xl px-4 py-3 mb-2 bg-emerald-500";
      else if (chosen && !isCorrect) classes = "flex rounded-2xl px-4 py-3 mb-2 bg-red-600";
      else if (!chosen && isRight) classes = "flex rounded-2xl border border-emerald-600 bg-zinc-800 px-4 py-3 mb-2";
    }

    return (
      <TouchableOpacity
        activeOpacity={0.85}
        className={classes}
        onPress={() => handleSelect(keyName)}
      >
        <View className="flex flex-row items-center">
          <View className="mr-3 px-2 py-1 rounded bg-zinc-700 border border-slate-700">
            <Text className="text-blue-400 font-bold">{keyName}</Text>
          </View>
          <View className="flex flex-1 flex-row items-center">
            {!!label && <Text className="text-slate-200 font-semibold">{label}</Text>}
            {!!imageUri && (
              <Image
                className="ml-2 rounded"
                style={{ width: 44, height: 44, backgroundColor: "#0b1220" }}
                source={{ uri: imageUri }}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-900 px-6">
        <Text className="text-2xl font-bold text-red-600 mb-2">Error</Text>
        <Text className="text-slate-300 text-center">{error}</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-900">
        <ActivityIndicator size="large" />
        <Text className="text-slate-300 mt-2">Loading questions…</Text>
      </View>
    );
  }

  if (!questions.length) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-900 px-6">
        <Text className="text-2xl font-bold text-slate-200 mb-2">No questions found</Text>
        <Text className="text-slate-300">
          Ensure CSV at <Text className="text-blue-400">./assets/questions.csv</Text> with required headers.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-900 px-4 pt-12">
      {/* Header */}
      <View className="flex flex-row items-center justify-between mb-4">
        <Text className="text-slate-200 text-2xl font-bold">Quiz Master</Text>
        <Text className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
          {q?.Subject}
        </Text>
      </View>

      {/* Progress */}
      <View className="items-center mb-3">
        <View className="w-full h-2 bg-zinc-700 rounded-full">
          <View
            className="h-full bg-emerald-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </View>
        <Text className="text-blue-400 text-xs mt-1">
          {idx + 1} / {total}
        </Text>
      </View>

      {/* Card */}
      <ScrollView contentContainerStyle={{ paddingBottom: 112 }}>
        <View className="bg-zinc-900 rounded-2xl p-4 border border-zinc-700">
          {!!q?.QuestionImage && (
            <Image
              className="w-full h-44 mb-3 rounded"
              source={{ uri: q.QuestionImage }}
              resizeMode="contain"
            />
          )}
          <Text className="text-slate-200 text-lg font-semibold">
            {q?.Question}
          </Text>
          <View className="mt-4">
            <Option keyName="A" label={q?.OptionA} imageUri={q?.OptionAImage} />
            <Option keyName="B" label={q?.OptionB} imageUri={q?.OptionBImage} />
            <Option keyName="C" label={q?.OptionC} imageUri={q?.OptionCImage} />
            <Option keyName="D" label={q?.OptionD} imageUri={q?.OptionDImage} />
          </View>

          {/* Feedback */}
          {selectedKey && (
            <View className="mt-3 rounded-xl border border-zinc-700 p-3 bg-[#0a0f1b]">
              {isCorrect ? (
                <>
                  <Text className="text-emerald-500 font-bold mb-1">Correct ✓</Text>
                  {!!q?.Explanation && (
                    <Text className="text-slate-300">{q.Explanation}</Text>
                  )}
                </>
              ) : (
                <>
                  <Text className="text-red-600 font-bold mb-1">Incorrect ✗</Text>
                  <Text className="text-slate-300">
                    Correct Answer: <Text className="font-bold">{q?.CorrectAnswer}</Text>
                  </Text>
                  {!!q?.Explanation && (
                    <Text className="text-slate-300 mt-1">{q.Explanation}</Text>
                  )}
                </>
              )}
            </View>
          )}

          {/* Nav */}
          <View className="flex flex-row justify-between mt-4">
            <TouchableOpacity
              className={`px-4 py-3 rounded-xl border ${idx === 0 ? "bg-[#0b0f19] border-zinc-700" : "bg-zinc-800 border-zinc-700"}`}
              disabled={idx === 0}
              onPress={() => setIdx((i) => Math.max(0, i - 1))}
            >
              <Text className={`font-bold ${idx === 0 ? "text-slate-600" : "text-slate-200"}`}>
                Prev
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`px-4 py-3 rounded-xl border ${idx === total - 1 ? "bg-[#0b0f19] border-zinc-700" : "bg-zinc-800 border-zinc-700"}`}
              disabled={idx === total - 1}
              onPress={() => setIdx((i) => Math.min(total - 1, i + 1))}
            >
              <Text className={`font-bold ${idx === total - 1 ? "text-slate-600" : "text-slate-200"}`}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;