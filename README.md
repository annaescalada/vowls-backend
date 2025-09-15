# Vowls - Backend

## 📖 Description

Vowls is the server-side application of the **Vowls** project. It provides the API and database models to support the frontend, handling user authentication, profiles, foods, and vowls generation.

---

## 🛠 Tech Stack

* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: MongoDB + Mongoose
* **Authentication**: Sessions / JWT
* **Deployment**: Heroku (or similar)

---

## 🚀 Features

* User authentication (signup, login, logout)
* Profile management (create, update, delete)
* Foods management (list all foods)
* Vowls management (create, view, delete)
* Meals management (save meals to user)

---

## 📌 User Stories (Backend)

* As a user I can create an account and log in securely.
* As a user I can complete my nutrition profile.
* As a user I can update or delete my profile.
* As a user I can see food groups and generate meals/vowls.

---

## 🗄 Models

### User Model

```javascript
{
  email: String, // required & unique
  password: String, // required
  name: String,
  birth: Date,
  gender: String, // enum: male, female
  weight: Number,
  height: Number,
  portion: Number,
  IMC: Number,
  GED: Number,
  Vowls: [String],
  completed: Boolean,
  Timestamp
}
```

### Food Model

```javascript
{
  name: String,
  img: String,
  type: String, // enum: fruit, berries, proteins, cereals, tubers, cruciferous, greens, otherveg, omega, fat, dairy, salsa
  portion: Number
}
```

### Vowl Model

```javascript
{
  fruit: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  berries: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  proteins: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  cereals: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  tubers: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  cruciferous: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  greens: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  othervegs: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  omega: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  fat: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  dairy: [{ type: Schema.Types.ObjectId, ref: 'food' }],
  salsa: [{ type: Schema.Types.ObjectId, ref: 'food' }]
}
```

---

## 🔌 API Endpoints

| HTTP Method | URL                     | Request Body                                               | Success | Error       | Description                        |
| ----------- | ----------------------- | ---------------------------------------------------------- | ------- | ----------- | ---------------------------------- |
| GET         | `/auth/me`              | (empty)                                                    | 200     | 404         | Check session and return user info |
| POST        | `/auth/signup`          | { name, email, password }                                  | 201     | 409/422/404 | Create user                        |
| POST        | `/auth/login`           | { email, password }                                        | 200     | 401/404/422 | Authenticate user                  |
| POST        | `/auth/logout`          | (empty)                                                    | 204     | 400         | Logout user                        |
| PUT         | `/auth/update`          | { name, birth, gender, weight, height, portion, IMC, GED } | 204     | 400/422     | Update user info                   |
| PUT         | `/auth/change-password` | { password }                                               | 204     | 400         | Update password                    |
| DELETE      | `/auth/delete`          | (empty)                                                    | 201     | 400         | Delete account                     |
| GET         | `/foods/all`            | (empty)                                                    | 200     | 400         | List all foods                     |
| GET         | `/vowl/getOne/:id`      | (empty)                                                    | 200     | 400         | Get one vowl by ID                 |
| GET         | `/vowls/all`            | (empty)                                                    | 200     | 400         | Get all vowls                      |
| POST        | `/vowls/save`           | { user, foods }                                            | 200     | 422/400     | Save new vowl                      |
| DELETE      | `/vowls/delete/:id`     | (empty)                                                    | 201     | 400         | Delete specific vowl               |
| POST        | `/meals/save`           | { meals }                                                  | 201     | 400         | Save meals to user                 |

---

## 📂 Project Structure (suggested)

```
server/
├── models/
│   ├── User.js
│   ├── Food.js
│   └── Vowl.js
├── routes/
│   ├── auth.js
│   ├── foods.js
│   └── vowls.js
├── app.js
├── config/
│   └── db.js
└── package.json
```

---

## 🧪 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔗 Links

* [Client Repository](https://github.com/screeeen/project-client)
* [Server Repository](https://github.com/screeeen/project-server)
* [Deployed App](http://heroku.com)
* [Trello Board](https://trello.com/b/F4dCC2Pa/vowls)
* [Slides](http://slides.com)
