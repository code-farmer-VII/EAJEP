Here is a **relational database schema** in **table format** based on your app's requirements, including all necessary entities, attributes, and their relationships:

---

### 🧑 **Users**

| Column Name    | Data Type | Description                     |
| -------------- | --------- | ------------------------------- |
| user\_id       | INT (PK)  | Unique identifier for each user |
| name           | VARCHAR   | User's full name                |
| email          | VARCHAR   | User's email address (unique)   |
| password\_hash | VARCHAR   | Hashed password                 |
| created\_at    | DATETIME  | Account creation time           |

---

### 🏢 **Departments**

| Column Name    | Data Type | Description                   |
| -------------- | --------- | ----------------------------- |
| department\_id | INT (PK)  | Unique ID for each department |
| name           | VARCHAR   | Department name (e.g., Pilot) |

**Example Data**:

* Pilot
* Aircraft Technician
* Cabin Crew & Hosts

---

### 💳 **Subscriptions**

| Column Name      | Data Type | Description                               |
| ---------------- | --------- | ----------------------------------------- |
| subscription\_id | INT (PK)  | Unique ID for each subscription           |
| user\_id         | INT (FK)  | Linked to Users table                     |
| department\_id   | INT (FK)  | Linked to Departments table               |
| start\_date      | DATETIME  | When the subscription started             |
| end\_date        | DATETIME  | When the subscription ends (nullable)     |
| status           | VARCHAR   | Status (e.g., active, pending, cancelled) |
| payment\_id      | INT (FK)  | Linked to Payments table                  |


**Relation**:

* Many-to-One (Many Subscriptions → 1 User)
* Many-to-One (Many Subscriptions → 1 Department)

---

### 🏦 **Payments** (NEW TABLE)

| Column Name         | Data Type | Description                               |
| ------------------- | --------- | ----------------------------------------- |
| payment\_id         | INT (PK)  | Unique ID for the payment                 |
| transaction\_number | VARCHAR   | Bank transaction reference number         |
| amount              | DECIMAL   | Amount paid (e.g., 49.99)                 |
| currency            | VARCHAR   | Currency (e.g., USD, EUR)                 |
| payment\_date       | DATETIME  | When the payment was made                 |
| payment\_status     | VARCHAR   | success, failed, pending                  |
| device\_id          | VARCHAR   | Device ID from which the payment was made |

> 🔐 The `payment_id` in the `Subscriptions` table links to this table for traceability.

---

### ✅ Subscription Flow (With Payment Verification)

1. User registers and selects a department.
2. Goes to **Subscription Page**.
3. Completes **payment** (generates a `Payments` entry with `transaction_number`, `amount`, `device_id`, etc.).
4. On successful verification (`payment_status = 'success'`):

   * A **Subscription** is created with `status = 'active'`.
5. App grants access to Exams, Notes, and Interview Questions.


---

### 📋 **ExamCategories**

| Column Name   | Data Type | Description                     |
| ------------- | --------- | ------------------------------- |
| category\_id  | INT (PK)  | Unique ID for exam category     |
| name          | VARCHAR   | E.g., English, Physics, etc.    |
| sub\_category | VARCHAR   | E.g., Vocabulary, Grammar, etc. |

---

### 📝 **Exams**

| Column Name    | Data Type | Description                           |
| -------------- | --------- | ------------------------------------- |
| exam\_id       | INT (PK)  | Unique ID for the exam                |
| department\_id | INT (FK)  | Which department this exam belongs to |
| category\_id   | INT (FK)  | Exam category                         |
| title          | VARCHAR   | Title or name of the exam             |
| description    | TEXT      | Optional exam description             |

---


### ✅ **Updated Tables**

#### ❓ **Questions**

| Column Name        | Data Type | Description                        |
| ------------------ | --------- | ---------------------------------- |
| question\_id       | INT (PK)  | Unique question ID                 |
| exam\_id           | INT (FK)  | Linked to Exams                    |
| question\_text     | TEXT      | The actual question                |
| question\_image    | VARCHAR   | URL/path to image (nullable)       |
| instruction        | TEXT      | Optional instructions (nullable)   |
| passage\_id        | INT (FK)  | FK to Passages table (nullable)    |
| explanation\_text  | TEXT      | Explanation for the correct answer |
| explanation\_image | VARCHAR   | Image explanation (nullable)       |
---

### 📄 **Passages** (For Reading Comprehension)

| Column Name | Data Type | Description       |
| ----------- | --------- | ----------------- |
| passage\_id | INT (PK)  | Unique ID         |
| content     | TEXT      | Full passage text |

---

#### ✅ **Options** (No change, but reaffirmed)

| Column Name  | Data Type | Description                        |
| ------------ | --------- | ---------------------------------- |
| option\_id   | INT (PK)  | Unique ID for option               |
| question\_id | INT (FK)  | Related question                   |
| option\_text | TEXT      | Text of the option                 |
| is\_correct  | BOOLEAN   | TRUE if this is the correct answer |

---

### 📚 **Notes**

| Column Name    | Data Type | Description                       |
| -------------- | --------- | --------------------------------- |
| note\_id       | INT (PK)  | Unique ID                         |
| department\_id | INT (FK)  | Related department                |
| title          | VARCHAR   | Note title                        |
| content        | TEXT      | Note content (text or rich media) |

---

### 🎤 **InterviewQuestions**

| Column Name        | Data Type | Description                              |
| ------------------ | --------- | ---------------------------------------- |
| interview\_id      | INT (PK)  | Unique ID                                |
| department\_id     | INT (FK)  | Related department                       |
| question\_text     | TEXT      | Interview question                       |
| answer\_text       | TEXT      | Suggested answer                         |
| explanation\_text  | TEXT      | Explanation of the answer (optional)     |
| explanation\_image | VARCHAR   | URL/path to explanation image (optional) |

---

## 🧱 Full Table List (with Updates)

You now have:

1. `Users`
2. `Departments`
3. `Subscriptions` *(links to Payments)*
4. `Payments` ✅
5. `ExamCategories`
6. `Exams`
7. `Questions` *(with explanation)*
8. `Options`
9. `Passages`
10. `Notes`
11. `InterviewQuestions` *(with answer + explanation)*

---

## 📊 Relationships Summary (UPDATED)

| Relationship                     | Type                   |
| -------------------------------- | ---------------------- |
| Users → Subscriptions            | One-to-Many            |
| Departments → Subscriptions      | One-to-Many            |
| Subscriptions → Payments         | Many-to-One            |
| Departments → Exams              | One-to-Many            |
| Departments → Notes              | One-to-Many            |
| Departments → InterviewQuestions | One-to-Many            |
| ExamCategories → Exams           | One-to-Many            |
| Exams → Questions                | One-to-Many            |
| Questions → Options              | One-to-Many            |
| Passages → Questions             | One-to-Many (optional) |

---

Let me know if you want this as:

* A diagram (ERD)
* SQL table creation script
* JSON structure for a NoSQL database

Or any other format.















