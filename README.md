
---

## 🧑 **Users**

| Column Name    | Data Type | Description                     |
| -------------- | --------- | ------------------------------- |
| user\_id       | INT (PK)  | Unique identifier for each user |
| name           | VARCHAR   | User's full name                |
| email          | VARCHAR   | User's email address (unique)   |
| password\_hash | VARCHAR   | Hashed password                 |
| created\_at    | DATETIME  | Account creation time           |

---

## 🏢 **Departments**

| Column Name    | Data Type | Description                   |
| -------------- | --------- | ----------------------------- |
| department\_id | INT (PK)  | Unique ID for each department |
| name           | VARCHAR   | Department name (Pilot, etc.) |

---

## 💳 **Subscriptions**

| Column Name      | Data Type | Description                           |
| ---------------- | --------- | ------------------------------------- |
| subscription\_id | INT (PK)  | Unique ID for each subscription       |
| user\_id         | INT (FK)  | Linked to Users table                 |
| department\_id   | INT (FK)  | Linked to Departments table           |
| start\_date      | DATETIME  | When the subscription started         |
| end\_date        | DATETIME  | When the subscription ends (nullable) |
| status           | VARCHAR   | Status (active, pending, cancelled)   |
| payment\_id      | INT (FK)  | Linked to Payments table              |

---

## 🏦 **Payments**

| Column Name         | Data Type | Description                       |
| ------------------- | --------- | --------------------------------- |
| payment\_id         | INT (PK)  | Unique ID for the payment         |
| transaction\_number | VARCHAR   | Bank transaction reference        |
| amount              | DECIMAL   | Amount paid                       |
| currency            | VARCHAR   | Currency (USD, EUR, etc.)         |
| payment\_date       | DATETIME  | When the payment was made         |
| payment\_status     | VARCHAR   | success, failed, pending          |
| device\_id          | VARCHAR   | Device ID from which payment made |

---

## 📝 **Exams**

| Column Name    | Data Type | Description                           |
| -------------- | --------- | ------------------------------------- |
| exam\_id       | INT (PK)  | Unique ID for the exam                |
| department\_id | INT (FK)  | Which department this exam belongs to |
| title          | VARCHAR   | Title of the exam                     |
| description    | TEXT      | Exam description (optional)           |

---

## 📂 **QuestionCategories**

| Column Name  | Data Type | Description                                  |
| ------------ | --------- | -------------------------------------------- |
| category\_id | INT (PK)  | Unique ID for question category              |
| name         | VARCHAR   | Category name (e.g., English, Math, Physics) |

---

## 📂 **QuestionSubcategories**

| Column Name     | Data Type | Description                                                           |
| --------------- | --------- | --------------------------------------------------------------------- |
| subcategory\_id | INT (PK)  | Unique ID for question subcategory                                    |
| category\_id    | INT (FK)  | Linked to QuestionCategories                                          |
| name            | VARCHAR   | Subcategory name (Antonym, Synonym, Grammar, Paragraph Comprehension) |
| instruction     | TEXT      | Instruction for this subcategory (nullable)                           |

---

## ❓ **Questions**

| Column Name        | Data Type | Description                        |
| ------------------ | --------- | ---------------------------------- |
| question\_id       | INT (PK)  | Unique question ID                 |
| exam\_id           | INT (FK)  | Linked to Exams                    |
| subcategory\_id    | INT (FK)  | Linked to QuestionSubcategories    |
| question\_text     | TEXT      | The actual question                |
| question\_image    | VARCHAR   | URL/path to image (nullable)       |
| passage\_id        | INT (FK)  | FK to Passages table (nullable)    |
| explanation\_text  | TEXT      | Explanation for the correct answer |
| explanation\_image | VARCHAR   | Image explanation (nullable)       |

---

## 📄 **Passages**

| Column Name | Data Type | Description       |
| ----------- | --------- | ----------------- |
| passage\_id | INT (PK)  | Unique ID         |
| content     | TEXT      | Full passage text |

---

## ✅ **Options**

| Column Name  | Data Type | Description                        |
| ------------ | --------- | ---------------------------------- |
| option\_id   | INT (PK)  | Unique ID for option               |
| question\_id | INT (FK)  | Related question                   |
| option\_text | TEXT      | Text of the option                 |
| is\_correct  | BOOLEAN   | TRUE if this is the correct answer |

---

## 📚 **Notes**

| Column Name    | Data Type | Description                       |
| -------------- | --------- | --------------------------------- |
| note\_id       | INT (PK)  | Unique ID                         |
| department\_id | INT (FK)  | Related department                |
| title          | VARCHAR   | Note title                        |
| content        | TEXT      | Note content (text or rich media) |

---

## 🎤 **InterviewQuestions**

| Column Name        | Data Type | Description                              |
| ------------------ | --------- | ---------------------------------------- |
| interview\_id      | INT (PK)  | Unique ID                                |
| department\_id     | INT (FK)  | Related department                       |
| question\_text     | TEXT      | Interview question                       |
| answer\_text       | TEXT      | Suggested answer                         |
| explanation\_text  | TEXT      | Explanation of the answer (optional)     |
| explanation\_image | VARCHAR   | URL/path to explanation image (optional) |

---

# 📊 Updated Relationships

| Relationship                       | Type                   |
| ---------------------------------- | ---------------------- |
| Users → Subscriptions              | One-to-Many            |
| Departments → Subscriptions        | One-to-Many            |
| Subscriptions → Payments           | Many-to-One            |
| Departments → Exams                | One-to-Many            |
| Departments → Notes                | One-to-Many            |
| Departments → InterviewQuestions   | One-to-Many            |
| Exams → Questions                  | One-to-Many            |
| QuestionCategories → Subcategories | One-to-Many            |
| Subcategories → Questions          | One-to-Many            |
| Passages → Questions               | One-to-Many (optional) |
| Questions → Options                | One-to-Many            |

---

✅ Now, each **Exam** can include **all categories**, and each **Question** is tied to a **Subcategory** (which has its own instruction).
✅ Special case: **Paragraph Comprehension** → linked to a **Passage**.

---


