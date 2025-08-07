import { describe, it, expect } from 'vitest'
import { execSync } from 'child_process'
import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

describe('Frontend Build System', () => {
  const frontendDir = process.cwd()
  const packageJsonPath = join(frontendDir, 'package.json')
  const viteconfigPath = join(frontendDir, 'vite.config.js')
  const tailwindConfigPath = join(frontendDir, 'tailwind.config.js')
  
  it('should have required configuration files', () => {
    expect(existsSync(packageJsonPath), 'package.json should exist').toBe(true)
    expect(existsSync(viteconfigPath), 'vite.config.js should exist').toBe(true)
    expect(existsSync(tailwindConfigPath), 'tailwind.config.js should exist').toBe(true)
  })
  
  it('should have required dependencies in package.json', () => {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
    
    const requiredDeps = ['react', 'react-dom', 'axios']
    const requiredDevDeps = ['vite', '@vitejs/plugin-react', 'tailwindcss']
    
    requiredDeps.forEach(dep => {
      expect(packageJson.dependencies).toHaveProperty(dep)
    })
    
    requiredDevDeps.forEach(dep => {
      expect(packageJson.devDependencies).toHaveProperty(dep)
    })
  })
  
  it('should have required npm scripts', () => {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
    
    expect(packageJson.scripts).toHaveProperty('dev')
    expect(packageJson.scripts).toHaveProperty('build')
    expect(packageJson.scripts).toHaveProperty('test')
  })
  
  it('should build successfully', () => {
    try {
      execSync('npm run build', { 
        cwd: frontendDir,
        stdio: 'pipe',
        timeout: 60000
      })
      
      expect(existsSync(join(frontendDir, 'dist'))).toBe(true)
      expect(existsSync(join(frontendDir, 'dist', 'index.html'))).toBe(true)
    } catch (error) {
      throw new Error(`Build failed: ${error.message}`)
    }
  })
  
  it('should generate optimized assets', () => {
    const distDir = join(frontendDir, 'dist')
    
    if (!existsSync(distDir)) {
      execSync('npm run build', { cwd: frontendDir, stdio: 'pipe' })
    }
    
    const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf-8')
    
    // Check for minified assets
    expect(indexHtml).toMatch(/assets\/.*\.js/)
    expect(indexHtml).toMatch(/assets\/.*\.css/)
  })
  
  it('should have correct Dockerfile', () => {
    const dockerfilePath = join(frontendDir, 'Dockerfile')
    expect(existsSync(dockerfilePath)).toBe(true)
    
    const dockerfile = readFileSync(dockerfilePath, 'utf-8')
    expect(dockerfile).toContain('FROM node:')
    expect(dockerfile).toContain('FROM nginx:')
    expect(dockerfile).toContain('npm run build')
  })
})