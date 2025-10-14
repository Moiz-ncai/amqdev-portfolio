# Project Data Architecture

## Overview
This directory contains centralized data for all projects in the portfolio. This architecture ensures:
- **Single Source of Truth**: All project data is defined once
- **Type Safety**: TypeScript interfaces prevent errors
- **Maintainability**: Easy to update and extend
- **Consistency**: Same data across all pages

## Structure

### `projects.ts`
Centralized project data with TypeScript interfaces.

```typescript
interface Project {
  id: string;              // Unique identifier for routing
  title: string;           // Display name
  subtitle: string;        // Short tagline
  description: string;     // Brief description (for listing pages)
  gradient: string;        // Tailwind gradient classes
  icon: string;            // Emoji icon
  status: 'Completed' | 'In Progress';
  year: string;
  // Optional detailed fields
  overview?: string;       // Full project description
  features?: string[];     // List of key features
  technologies?: string[]; // Tech stack
  challenges?: string;     // Development challenges
  results?: string;        // Outcomes and impact
  images?: string[];       // Project screenshots
  liveUrl?: string;        // Production URL
  githubUrl?: string;      // Repository URL
}
```

## Usage

### In Listing Pages (Projects.tsx)
```typescript
import { projectsList } from '../data/projects';

// projectsList is an array of all projects
const projects = projectsList;
```

### In Detail Pages (ProjectDetails.tsx)
```typescript
import { projectsData } from '../data/projects';

// projectsData is a Record<string, Project>
const project = projectsData[id];
```

## Adding a New Project

1. Open `src/data/projects.ts`
2. Add new entry to `projectsData`:
```typescript
export const projectsData: Record<string, Project> = {
  // ... existing projects
  newproject: {
    id: 'newproject',
    title: 'New Project',
    subtitle: 'Amazing New Technology',
    description: 'Brief description for listing page',
    gradient: 'from-purple-500 to-pink-500',
    icon: '🚀',
    status: 'In Progress',
    year: '2024',
    // Add optional fields as you develop the project
    overview: 'Detailed description...',
    features: ['Feature 1', 'Feature 2'],
    // ... etc
  },
};
```

3. That's it! The project will automatically appear in:
   - Projects listing page
   - Project details page (with placeholder if no detailed data)
   - Search/filter functionality (if implemented)

## Benefits of This Architecture

### ✅ **DRY Principle**
- No data duplication
- Update once, reflect everywhere

### ✅ **Type Safety**
- TypeScript catches errors at compile time
- Auto-completion in IDEs
- Prevents typos and inconsistencies

### ✅ **Scalability**
- Easy to add new projects
- Easy to add new fields
- Centralized updates

### ✅ **Maintainability**
- Clear separation of concerns
- Data separate from UI logic
- Easy to understand and modify

### ✅ **Deployment Safety**
- No component-level state issues
- Consistent builds
- Predictable behavior

## Migration Notes

This architecture replaces the old pattern where:
- ❌ Projects.tsx had its own project array
- ❌ ProjectDetails.tsx had its own projectsData object
- ❌ Data was duplicated and could get out of sync

Now:
- ✅ Single source of truth in `src/data/projects.ts`
- ✅ Both components import from same source
- ✅ TypeScript ensures data consistency

