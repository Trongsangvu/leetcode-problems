# Repository Pattern

## 1. What is Repository Pattern?

The **Repository Pattern** is a design pattern that separates **data access logic** from **business logic**.

Instead of allowing the Service to communicate directly with the database, the Service communicates through a Repository.

```text
Service
   ↓
Repository
   ↓
Database
```

The Repository acts as a **middle layer** between the application and the data source.

---

## 2. Why use Repository Pattern?

Without the Repository Pattern:

```text
Service
   ↓
Database
```

The Service is responsible for both:

- Business logic
- Database operations

This creates a strong dependency between the Service and the database.

With the Repository Pattern:

```text
Service
   ↓
Repository
   ↓
Database
```

Responsibilities are separated.

- **Service** → Business logic
- **Repository** → Data access
- **Database** → Data storage

---

## 3. Main Concept

The main idea is:

> The Service should care about **what data it needs**, not **how the data is retrieved**.

For example, the Service may need:

```text
Find user by ID
```

It asks the Repository for the user.

The Service does not need to know whether the Repository uses:

- MySQL
- PostgreSQL
- MongoDB
- Redis
- An external API

The Repository hides those implementation details.

---

## 4. How It Works

The general flow is:

```text
Client
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

### Step 1 — Client

The client sends a request.

```text
GET /users/10
```

### Step 2 — Controller

The Controller receives the request and passes the information to the Service.

### Step 3 — Service

The Service handles the business logic.

It asks the Repository for the required data.

### Step 4 — Repository

The Repository performs the data-access operation.

For example:

```text
Find user with ID = 10
```

### Step 5 — Database

The Repository communicates with the database.

### Step 6 — Return Result

The result travels back through the same layers:

```text
Database
   ↓
Repository
   ↓
Service
   ↓
Controller
   ↓
Client
```

---

## 5. Responsibility of Each Layer

| Layer      | Responsibility                     |
| ---------- | ---------------------------------- |
| Controller | Handle HTTP requests and responses |
| Service    | Handle business logic              |
| Repository | Handle data access                 |
| Database   | Store data                         |

### Controller

Responsible for communication with the client.

```text
Request → Controller → Response
```

### Service

Responsible for application/business rules.

```text
Business Logic
```

### Repository

Responsible for accessing data.

```text
Find
Create
Update
Delete
```

### Database

Responsible for storing the actual data.

---

## 6. Repository as an Abstraction

The Repository provides an abstraction over the database.

```text
             Service
                │
                ▼
        ┌──────────────┐
        │  Repository  │
        └──────────────┘
           │    │    │
           ▼    ▼    ▼
         MySQL MongoDB API
```

The Service doesn't need to know which data source is being used.

It only interacts with the Repository.

---

## 7. Without Repository Pattern

```text
Controller
    ↓
Service
    ↓
Database
```

The Service directly depends on the database.

This means the Service contains:

```text
Business Logic
      +
Database Logic
```

As the application grows, the Service can become difficult to maintain.

---

## 8. With Repository Pattern

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

Now the responsibilities are separated:

```text
Service
   ↓
Business Logic

Repository
   ↓
Data Access
```

This makes the architecture cleaner.

---

## 9. Benefits

### Separation of Concerns

Each layer has a specific responsibility.

### Easier Testing

The Repository can be replaced with mock or fake data when testing the Service.

### Easier Database Changes

The application can change its data source with less impact on the business logic.

### Reusable Data Access

Multiple Services can use the same Repository.

### Easier Maintenance

Database-related logic is centralized instead of being scattered throughout Services.

---

## 10. Important Relationship

The Repository Pattern creates this relationship:

```text
Business Logic
      │
      │ does not directly access
      ▼
   Database
```

Instead:

```text
Business Logic
      │
      ▼
 Repository
      │
      ▼
 Database
```

The Repository is the **boundary between business logic and data access**.

---

## 11. Simple Mental Model

Remember these four questions:

```text
Model
"What does the data look like?"

Service
"What should the application do?"

Repository
"How do I access the data?"

Database
"Where is the data stored?"
```

---

## 12. Core Principle

The most important idea of the Repository Pattern is:

> **Separate business logic from data-access logic.**

Instead of:

```text
Service → Database
```

use:

```text
Service → Repository → Database
```

The Repository hides the details of data access from the Service.

---

## 13. Summary

```text
                 APPLICATION
                      │
                      ▼
                 Controller
                      │
                      ▼
                   Service
                Business Logic
                      │
                      ▼
                 Repository
                 Data Access
                      │
                      ▼
                  Database
                 Data Storage
```

### In one sentence:

**Repository Pattern is a design pattern that puts data-access operations behind a Repository so that business logic does not depend directly on the database.**
