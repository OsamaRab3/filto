# Contributing to Filto

Thank you for your interest in contributing to Filto! We welcome all contributions, whether they're bug reports, feature requests, or code contributions. This guide will help you get started with contributing to the project.

## Table of Contents

- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Code Contributions](#code-contributions)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Commit Message Guidelines](#commit-message-guidelines)
- [License](#license)


## How Can I Contribute?

### Reporting Bugs

Bugs are tracked as [GitHub Issues](https://github.com/OsamaRab3/filto/issues). Before creating a new issue:

1. Check if the issue has already been reported
2. Provide a clear title and description
3. Include steps to reproduce the issue
4. Add relevant error messages and screenshots if applicable
5. Specify your environment (OS, Node.js version, etc.)

### Suggesting Enhancements

We welcome suggestions for new features or improvements. Please create an issue with:

1. A clear description of the enhancement
2. The problem it solves
3. Any alternative solutions you've considered
4. Additional context or screenshots

### Code Contributions

1. Fork the repository
2. Create a new branch for your feature/fix
3. Make your changes
4. Add tests if applicable
5. Run the test suite
6. Submit a pull request

## Development Setup

1. Fork and clone the repository
   ```bash
   git clone https://github.com/your-username/filto.git
   cd filto
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Build the project
   ```bash
   npm run build
   ```

4. Link the package for local development
   ```bash
   npm link
   ```

5. Verify the installation
   ```bash
   filto --version
   ```

## Pull Request Process

1. Update the README.md with details of changes if needed
3. The pull request should include:
   - Description of changes
   - Related issue number (if applicable)
   - Screenshots (if applicable)
   - Any breaking changes

## Coding Standards

- Follow the existing code style
- Write clear commit messages 
- Document new features and update existing documentation
- Keep the codebase clean and organized

## Testing

We use Mocha for testing. To run the tests:

```bash
npm test
```

Please ensure all tests pass before submitting a pull request. Add tests for new features and bug fixes.

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Here are some examples:

- `feat: add PDF merging functionality`
- `fix: correct image conversion edge case`
- `docs: update README with new commands`
- `test: add tests for PDF info extraction`
- `chore: update dependencies`

---

## Thank You! :sparkles:

Thank you for taking the time to contribute to Filto! Your contributions help make this tool better for everyone in the community. We appreciate your effort and look forward to your valuable contributions.

Happy coding❤️
