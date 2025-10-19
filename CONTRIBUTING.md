# Contributing to Genomic Facility Website

Thank you for your interest in contributing to our genomic facility website! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

1. **Search existing issues** before creating a new one
2. **Use descriptive titles** for issues
3. **Provide detailed information** including:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Environment details (OS, browser, etc.)
   - Screenshots if applicable

### Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Commit your changes** with descriptive messages
6. **Push to your fork** and create a pull request

## 📝 Coding Standards

### Code Style

We use ESLint and Prettier for code formatting. Please ensure:

```bash
npm run lint
npm run format
```

### TypeScript Guidelines

- **Use strict TypeScript** configuration
- **Provide type annotations** for all functions
- **Prefer interfaces** over types for object shapes
- **Use generics** when appropriate
- **Avoid `any` type** unless absolutely necessary

### Component Guidelines

- **Use functional components** with hooks
- **Follow React best practices**
- **Implement proper error boundaries**
- **Use semantic HTML5 elements**
- **Ensure accessibility compliance**

### File Naming

- **Components**: PascalCase (e.g., `ServiceCard.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
- **Files**: kebab-case for folders (e.g., `service-cards/`)

## 🧪 Testing

### Running Tests

```bash
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

### Writing Tests

- **Unit tests** for utility functions
- **Component tests** for UI components
- **Integration tests** for user flows
- **E2E tests** for critical paths

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   └── [feature]/       # Feature-specific components
├── contexts/            # React contexts
├── hooks/               # Custom hooks
├── lib/                 # Utility libraries
├── types/               # TypeScript definitions
└── styles/              # Global styles
```

## 🚀 Development Workflow

### Setup Development Environment

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/genomic-facility-website.git
   cd genomic-facility-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### Making Changes

1. **Create a new branch** for your feature
2. **Make your changes** following our guidelines
3. **Test thoroughly** including:
   - Functionality testing
   - Responsive design testing
   - Accessibility testing
   - Cross-browser testing
4. **Update documentation** if needed
5. **Submit pull request** with detailed description

## 📋 Pull Request Template

### Description
Brief description of changes and motivation.

### Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

### Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing completed

### Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No linting errors
- [ ] All tests passing

## 🌍 Internationalization

### Adding New Languages

1. **Update language context** (`src/contexts/language-context.tsx`)
2. **Add translations** for all text content
3. **Test RTL/LTR layouts** as appropriate
4. **Update documentation**

### Translation Guidelines

- **Use consistent terminology**
- **Maintain context appropriateness**
- **Test with native speakers** if possible
- **Consider cultural differences**

## 🎨 UI/UX Guidelines

### Design System

- **Follow established color palette**
- **Use consistent spacing** (4px base unit)
- **Maintain typography hierarchy**
- **Ensure responsive design**

### Accessibility

- **WCAG 2.1 AA compliance**
- **Semantic HTML5 elements**
- **ARIA labels and roles**
- **Keyboard navigation support**
- **Screen reader compatibility**

## 📱 Performance Guidelines

### Optimization

- **Image optimization** using Next.js Image component
- **Code splitting** for large components
- **Lazy loading** for non-critical content
- **Bundle size monitoring**

### Monitoring

- **Lighthouse scores** > 90
- **Core Web Vitals** optimization
- **Performance budget** adherence

## 🔧 Tools and Configuration

### Required Tools

- **Node.js** 18+
- **npm** or **yarn**
- **Git**
- **VS Code** (recommended)

### Recommended VS Code Extensions

- **ESLint**
- **Prettier**
- **TypeScript Importer**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **GitLens**

## 📞 Getting Help

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For general questions and ideas
- **Email**: For private matters

### Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **TypeScript**: https://www.typescriptlang.org/docs/

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to our genomic facility website! 🧬