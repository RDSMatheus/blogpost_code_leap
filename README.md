# CodeLeap Network Challenge

## 💻 About The Project

Project developed as a technical challenge for CodeLeap, consisting of a social network where users can create, edit and delete posts. The application is available at: [BlogPost CodeLeap](https://blogpost-code-leap.vercel.app/)

## 🛠 Technologies Used

- React 18
- TypeScript
- React Router Dom
- React Helmet Async
- Vite
- LocalStorage
- Vercel (Deploy)

## 🚀 Features

- Username login
- Complete CRUD for posts
  - Post creation
  - Real-time feed reading
  - Update own posts
  - Delete own posts
- Responsive design
- Form validation
- User data persistence

## 📦 Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/RDSMatheus/blogpost_code_leap.git
cd blogpost_code_leap
```

2. Install dependencies:

```bash
npm install
```

3. Available scripts:

```bash
npm run dev      # Start development server
npm run build    # Generate production build
npm run lint     # Run code verification
npm run preview  # Preview production version
```

## 📁 Project Structure

```
src/
├── assets/                # Static files (SVGs, images)
├── components/
│   ├── common/           # Reusable base components
│   │   ├── Button/       # Custom button component
│   │   ├── Form/         # Form component
│   │   ├── Input/        # Input component
│   │   ├── Skeleton/     # Loading component
│   │   └── TextArea/     # Text area component
│   ├── context/          # Application contexts
│   │   ├── AuthContext   # Authentication context
│   │   ├── ModalContext  # Modal context
│   │   └── PostsContext  # Posts context
│   ├── feed/             # Feed specific components
│   │   ├── FeedHeader/   # Feed header
│   │   ├── FeedPost/     # Post component
│   │   └── FeedWrapper/  # Feed container
│   ├── forms/            # Application forms
│   ├── Modal/            # Base modal component
│   └── modals/           # Specific modals
├── hooks/                # Custom hooks
├── pages/                # Application pages
├── services/            # Services and API calls
└── types/               # TypeScript types
```

The project structure is organized in a modular way, separating responsibilities:

- Reusable components in `common/`
- State management contexts in `context/`
- Feed specific components in `feed/`
- Custom hooks for reusable logic
- Services for API communication
- Centralized types in `types/`

## ⚙️ Configuration

The project uses the following main dependency versions:

- Node.js 16+
- npm or yarn
- Modern browsers with ES6+ support

## 🔌 API Endpoints

The application consumes the CodeLeap API through the endpoints:

- `GET /careers/` - List posts
- `POST /careers/` - Create post
- `PATCH /careers/:id/` - Update post
- `DELETE /careers/:id/` - Remove post

## 🌐 Important Links

- [Live Application](https://blogpost-code-leap.vercel.app/)

