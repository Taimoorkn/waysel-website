// src/utils/techIcons.js
import { Code } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAmazonwebservices,
  SiDocker,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiPython,
  SiDjango,
  SiFlask,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiGooglecloud, 
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiOpenai, 
  SiTensorflow,
} from 'react-icons/si';

// Map of tech names (lowercase) to their corresponding icon components and colors
const techIconsMap = {
  // Frontend
  'react': { icon: SiReact, color: '#61DAFB' },
  'typescript': { icon: SiTypescript, color: '#3178C6' },
  'tailwind css': { icon: SiTailwindcss, color: '#06B6D4' },
  'tailwindcss': { icon: SiTailwindcss, color: '#06B6D4' },
  'javascript': { icon: SiJavascript, color: '#F7DF1E' },
  'html': { icon: SiHtml5, color: '#E34F26' },
  'html5': { icon: SiHtml5, color: '#E34F26' },
  'css': { icon: SiCss3, color: '#1572B6' },
  'css3': { icon: SiCss3, color: '#1572B6' },
  'next.js': { icon: SiNextdotjs, color: '#000000' },
  'nextjs': { icon: SiNextdotjs, color: '#000000' },
  'vue': { icon: SiVuedotjs, color: '#4FC08D' },
  'vue.js': { icon: SiVuedotjs, color: '#4FC08D' },
  'angular': { icon: SiAngular, color: '#DD0031' },

  // Backend
  'node.js': { icon: SiNodedotjs, color: '#339933' },
  'nodejs': { icon: SiNodedotjs, color: '#339933' },
  'express': { icon: SiExpress, color: '#000000' },
  'express.js': { icon: SiExpress, color: '#000000' },
  'mongodb': { icon: SiMongodb, color: '#47A248' },
  'mysql': { icon: SiMysql, color: '#4479A1' },
  'postgresql': { icon: SiPostgresql, color: '#4169E1' },
  'graphql': { icon: SiGraphql, color: '#E10098' },
  'python': { icon: SiPython, color: '#3776AB' },
  'django': { icon: SiDjango, color: '#092E20' },
  'flask': { icon: SiFlask, color: '#000000' },
  'php': { icon: SiPhp, color: '#777BB4' },
  'laravel': { icon: SiLaravel, color: '#FF2D20' },

  // Cloud & Infrastructure
  'aws': { icon: SiAmazonwebservices, color: '#232F3E' },
  'amazon web services': { icon: SiAmazonwebservices, color: '#232F3E' },
  'docker': { icon: SiDocker, color: '#2496ED' },
  'kubernetes': { icon: SiKubernetes, color: '#326CE5' },
  'k8s': { icon: SiKubernetes, color: '#326CE5' },
  'ci/cd': { icon: SiJenkins, color: '#D24939' },
  'github actions': { icon: SiGithubactions, color: '#2088FF' },
  'firebase': { icon: SiFirebase, color: '#FFCA28' },
  'google cloud': { icon: SiGooglecloud, color: '#4285F4' },
  'gcp': { icon: SiGooglecloud, color: '#4285F4' }, 

  // AI & ML
  'openai': { icon: SiOpenai, color: '#412991' },
  'openai gpt': { icon: SiOpenai, color: '#412991' },
  'gpt': { icon: SiOpenai, color: '#412991' },
  'gpt-4': { icon: SiOpenai, color: '#412991' },
  'natural language processing': { icon: SiOpenai, color: '#412991' },
  'nlp': { icon: SiOpenai, color: '#412991' },
  'tensorflow': { icon: SiTensorflow, color: '#FF6F00' },
};

// Function to get the icon component for a given technology name
export const getTechIcon = (techName) => {
  const key = techName.toLowerCase().trim();

  // Return the mapped icon or a default one if not found
  if (techIconsMap[key]) {
    const { icon: Icon, color } = techIconsMap[key];
    return <Icon style={{ color }} />;
  }

  // Default icon for unknown technologies
  return <Code size={14} className="text-gray-500" />;
};

// Export the entire map for advanced use cases
export default techIconsMap;