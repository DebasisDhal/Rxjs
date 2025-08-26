# Copilot Instructions for Rxjsdetails Angular Project

## Project Overview
- This is an Angular 18+ application focused on RxJS usage and demonstration.
- The project uses standalone Angular components (no NgModules) and Angular routing.
- Main app code is in `src/app/` and feature pages are in `src/pages/`.

## Architecture & Patterns
- **Standalone Components:** All components (e.g., `BasicComponent`, `Part2Component`) are declared as `standalone: true`.
- **Routing:**
  - Routes are defined in `src/app/app.routes.ts` using the `Routes` array.
  - Example:
    ```ts
    export const routes: Routes = [
      { path: 'basic', component: BasicComponent },
      { path: 'part2', component: Part2Component }
    ];
    ```
- **Component Structure:**
  - Each feature/page has its own folder under `src/pages/`.
  - Each component has `.ts`, `.html`, `.css`, and `.spec.ts` files.
- **Observables:**
  - RxJS observables are used extensively in components for demonstration.
  - Example: `cityList2$ = of([...])`, `cityList3$ = from([...])`, `myInterval$ = interval(1000)`.

## Developer Workflows
- **Start Dev Server:**
  - `npm start` or `ng serve` (see also `.vscode/launch.json` for VS Code launch configs)
- **Build:**
  - `npm run build` or `ng build`
- **Test:**
  - `npm test` or `ng test` (runs Karma/Jasmine unit tests)
- **Debug:**
  - Use VS Code launch config "ng serve" to debug in Chrome.
  - Place `debugger;` statements in TypeScript; open browser DevTools to break.
- **Scaffolding:**
  - Use `ng generate component <name>` for new components.

## Project Conventions
- **File Naming:**
  - Use kebab-case for files and folders (e.g., `basic.component.ts`).
- **Styling:**
  - Global styles in `src/styles.css`.
  - Component styles in their respective `.css` files.
- **EditorConfig:**
  - Enforced 2-space indentation, single quotes in TypeScript, no trailing whitespace.
- **Testing:**
  - Each component has a corresponding `.spec.ts` file using Jasmine.

## Integration & External Dependencies
- **Angular CLI:** Used for all build/test/dev workflows.
- **RxJS:** Core to the app's logic and demos.
- **No custom backend integration** is present; all data is local or static.

## Key Files & Directories
- `src/app/app.routes.ts` — Main route definitions
- `src/pages/` — Feature components
- `package.json` — Scripts and dependencies
- `.vscode/launch.json` — Debugging configs
- `.editorconfig` — Editor settings
- `README.md` — Basic Angular CLI usage

## Example: Adding a New Page
1. Run `ng generate component pages/newpage --standalone`.
2. Add a route in `app.routes.ts`:
   ```ts
   { path: 'newpage', component: NewpageComponent }
   ```
3. Use `<router-outlet></router-outlet>` in your main template to enable navigation.

---

For more, see the Angular CLI docs or the project README.
