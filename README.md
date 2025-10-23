# CSS Animation Debug Lab - Wildlands Conservation

This lab challenges students to debug and fix CSS animations and interactions

## 🚀 Getting Started

1. **Navigate to the lab directory**: `cd lab/`

2. **Start with the working versions** to understand the target:
   - Open `solutions/index-solution.html` in your browser
   - Navigate through all solution pages to see professional animations
   - Experience the smooth interactions and polished feel

3. **Examine the broken versions** to understand the challenge:
   - Open `student-files/index.html` to see the issues
   - Navigate through the broken pages to feel the problems
   - **Your mission**: Fix the animations and interactions to match the solutions

4. **Use the lab instructions** for detailed guidance:
   - Read `README.md` in the lab folder for comprehensive debugging techniques
   - Follow the systematic approaches for investigating issues
   - Use developer tools effectively to identify root causesfe conservation website. Students will use developer tools to investigate broken animations, fix layout issues, and restore interactive elements to create a polished, professional experience.

5. Run `npm test` to check if your task pass

## 🎯 Learning Objectives

- Master CSS animation properties and `@keyframes` syntax
- Debug animation issues using browser developer tools
- Fix layout problems with CSS Grid and Flexbox
- Implement smooth hover interactions and transitions
- Understand CSS cascade and specificity in animation contexts
- Practice systematic debugging approaches

## 🏗️ Project Structure

```
├── assets/                                      # Shared resources (images, graphics)
│   └── images/                                  # Wildlife SVGs and preview images
├── lab/                                         # All lab materials and files
│   ├── student-files/                           # Files for students to debug
│   │   ├── index.html                           # Homepage (broken)
│   │   ├── savanna.html                         # Savanna biome (broken)
│   │   ├── ocean.html                           # Ocean biome (broken) 
│   │   ├── cave.html                            # Cave biome (broken)
│   │   ├── contact.html                         # Contact form (broken)
│   │   └── styles/                              # Broken CSS files
│   │       ├── main.css                         # Site-wide styles
│   │       ├── homepage.css                     # Homepage-specific styles
│   │       ├── savanna.css, ocean.css, cave.css # Biome-specific styles
│   │       └── contact.css                      # Contact form styles
│   ├── solutions/                               # Reference implementations
│   │   ├── index-solution.html                 # Working homepage
│   │   ├── savanna-solution.html               # Working savanna page
│   │   ├── ocean-solution.html                 # Working ocean page
│   │   ├── cave-solution.html                  # Working cave page
│   │   ├── contact-solution.html               # Working contact form
│   │   └── styles/                              # Working CSS files
│   │       ├── main-solution.css               # Fixed site-wide styles
│   │       ├── homepage-solution.css           # Fixed homepage styles
│   │       └── [biome]-solution.css            # Fixed biome styles
│   └── README.md                                # Detailed debugging instructions
└── README.md                                    # Project overview (this file)
```

## 🚨 The Challenge

The Wildlands Conservation website is broken hours before a major donor presentation! Students must identify and fix:

### Critical Issues Across All Pages:
- **Animation failures**: Hero sections, stats counters, and card animations not working
- **Interactive disasters**: Buttons with invisible text, elements flying off screen on hover
- **Layout breakdowns**: Grid systems collapsed, responsive design broken
- **Visibility problems**: Text unreadable due to color contrast issues
- **Navigation issues**: Links opening in wrong tabs/windows

### Key Problem Areas:
1. **Homepage**: Static hero section, broken stats animations, habitat cards appearing all at once
2. **Savanna**: Collapsed grid layout, cards shooting off screen on hover
3. **Ocean**: Dead fish animations, missing wave movements, broken bubble effects
4. **Cave**: Invisible text on dark backgrounds, frozen bat animations
5. **Contact**: Non-functional forms, broken data tables

## 🛠️ Skills Developed

### CSS Animation Mastery:
- `@keyframes` definition and naming conventions
- Animation properties: duration, delay, timing-function, iteration-count
- Transform properties: translate, scale, rotate
- Transition properties for smooth interactions

### Developer Tools Proficiency:
- Animation Inspector for debugging motion
- Elements panel for CSS investigation
- Network panel for resource loading issues
- Console panel for error identification

### Layout & Responsive Design:
- CSS Grid and Flexbox debugging
- Responsive design principles
- Box model understanding
- Positioning and z-index management

### Color Theory & Accessibility:
- Color contrast for readability
- Visual hierarchy through color choices
- Accessible hover states and focus indicators

## ⏱️ Time Allocation (4 hours total)

- **1 hour**: Developer tools mastery and investigation techniques
- **2 hours**: Homepage fixes (high priority)
- **1 hour**: Additional conservation areas (student choice)

## 🎨 Design Principles Reinforced

- **Smooth, purposeful animations** enhance user experience
- **Consistent interaction patterns** build user confidence
- **Accessible color choices** ensure inclusivity
- **Responsive layouts** work across all devices
- **Professional polish** makes content trustworthy

## 🏆 Success Criteria

Students will demonstrate mastery by:
- Restoring smooth, professional animations across the site
- Fixing all hover and interaction states
- Ensuring readable text with proper contrast
- Creating responsive layouts that work on all screen sizes
- Implementing consistent navigation behavior

## 🦁 Conservation Theme Integration

The wildlife conservation theme provides:
- **Meaningful context** for technical learning
- **Real-world application** of web development skills
- **Engagement through storytelling** about environmental protection
- **Visual appeal** through beautiful animal imagery and nature themes

## � File Organization Benefits

This reorganized structure provides several advantages:

- **Clear separation**: Student files and solutions are distinct, preventing accidental spoilers
- **Logical grouping**: All student work files are together, all solutions together
- **Shared assets**: Images and resources are centralized to avoid duplication
- **Easy navigation**: Students know exactly where to find their working files
- **Clean workspace**: The main directory focuses on key files (README, config files)
- **Scalable**: Easy to add new biomes or features without cluttering directories

## �🚀 Getting Started

1. **Start with the working versions** to understand the target:
   - Open `solutions/index-solution.html` in your browser
   - Navigate through all solution pages to see professional animations
   - Experience the smooth interactions and polished feel

2. **Examine the broken versions** to understand the challenge:
   - Open `student-files/index.html` to see the issues
   - Navigate through the broken pages to feel the problems
   - **Your mission**: Fix the animations and interactions to match the solutions

3. **Use the lab instructions** for detailed guidance:
   - Read `lab/README.md` for comprehensive debugging techniques
   - Follow the systematic approaches for investigating issues
   - Use developer tools effectively to identify root causes

## 💡 Quick Start Tips

- **Navigate to lab directory first**: `cd lab/` then start your work
- **Time allocation**: 4 hours total (1 hour tools mastery, 2 hours homepage, 1 hour additional areas)
- **Start with homepage**: `student-files/index.html` is the highest priority
- **Use developer tools**: Animation inspector, Elements panel, Network panel, Console
- **Think systematically**: Investigate → Hypothesize → Test → Fix incrementally
- **Compare with solutions**: When stuck, study the working versions to understand why they work