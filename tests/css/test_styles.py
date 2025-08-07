import pytest
import subprocess
import json
from pathlib import Path

class TestCSSSystem:
    
    def test_tailwind_config_exists(self):
        """Test Tailwind configuration exists"""
        frontend_dir = Path(__file__).parent.parent.parent / "frontend"
        tailwind_config = frontend_dir / "tailwind.config.js"
        assert tailwind_config.exists(), "tailwind.config.js should exist"
    
    def test_postcss_config_exists(self):
        """Test PostCSS configuration exists"""
        frontend_dir = Path(__file__).parent.parent.parent / "frontend"
        postcss_config = frontend_dir / "postcss.config.js"
        assert postcss_config.exists(), "postcss.config.js should exist"
    
    def test_main_css_exists(self):
        """Test main CSS file exists"""
        frontend_dir = Path(__file__).parent.parent.parent / "frontend"
        main_css = frontend_dir / "src" / "styles" / "index.css"
        assert main_css.exists(), "Main CSS file should exist"
    
    def test_css_contains_tailwind_directives(self):
        """Test CSS file contains required Tailwind directives"""
        frontend_dir = Path(__file__).parent.parent.parent / "frontend"
        main_css = frontend_dir / "src" / "styles" / "index.css"
        
        with open(main_css) as f:
            css_content = f.read()
        
        assert "@tailwind base;" in css_content
        assert "@tailwind components;" in css_content
        assert "@tailwind utilities;" in css_content
    
    def test_tailwind_classes_in_components(self):
        """Test that React components use Tailwind classes"""
        frontend_dir = Path(__file__).parent.parent.parent / "frontend"
        components_dir = frontend_dir / "src" / "components"
        
        if not components_dir.exists():
            pytest.skip("Components directory not found")
        
        # Check HomePage component for Tailwind classes
        homepage = components_dir / "HomePage.jsx"
        if homepage.exists():
            with open(homepage) as f:
                content = f.read()
            
            tailwind_classes = [
                "text-", "bg-", "p-", "m-", "flex", "grid", 
                "rounded-", "hover:", "focus:", "transition"
            ]
            
            has_tailwind = any(cls in content for cls in tailwind_classes)
            assert has_tailwind, "HomePage should use Tailwind classes"
    
    def test_responsive_breakpoints(self):
        """Test responsive design breakpoints"""
        frontend_dir = Path(__file__).parent.parent.parent / "frontend"
        tailwind_config = frontend_dir / "tailwind.config.js"
        
        with open(tailwind_config) as f:
            config_content = f.read()
        
        # Should contain responsive prefixes
        responsive_classes = ["md:", "lg:", "xl:", "2xl:"]
        
        # Check in components for responsive usage
        components_dir = frontend_dir / "src" / "components"
        if components_dir.exists():
            for component_file in components_dir.glob("*.jsx"):
                with open(component_file) as f:
                    content = f.read()
                    if any(cls in content for cls in responsive_classes):
                        return  # Found responsive classes
        
        # If no responsive classes found in components, check config
        has_responsive_config = any(cls in config_content for cls in responsive_classes)
        assert has_responsive_config, "Should have responsive design breakpoints"
    
    def test_css_build_process(self):
        """Test CSS build and optimization"""
        frontend_dir = Path(__file__).parent.parent.parent / "frontend"
        
        # Check if package.json has CSS-related dependencies
        package_json = frontend_dir / "package.json"
        if package_json.exists():
            with open(package_json) as f:
                package_data = json.load(f)
            
            dev_deps = package_data.get("devDependencies", {})
            assert "tailwindcss" in dev_deps, "Should have tailwindcss dependency"
            assert "autoprefixer" in dev_deps, "Should have autoprefixer dependency"
            assert "postcss" in dev_deps, "Should have postcss dependency"
    
    def test_apple_inspired_design_elements(self):
        """Test for Apple-inspired design elements"""
        frontend_dir = Path(__file__).parent.parent.parent / "frontend"
        css_file = frontend_dir / "src" / "styles" / "index.css"
        
        with open(css_file) as f:
            css_content = f.read()
        
        # Check for Apple-style design elements
        apple_elements = [
            "backdrop-blur",
            "antialiased", 
            "font-smoothing",
            "gradient",
            "rounded"
        ]
        
        has_apple_elements = any(element in css_content for element in apple_elements)
        assert has_apple_elements, "Should have Apple-inspired design elements"
    
    def test_css_custom_properties(self):
        """Test custom CSS properties and variables"""
        frontend_dir = Path(__file__).parent.parent.parent / "frontend"
        tailwind_config = frontend_dir / "tailwind.config.js"
        
        with open(tailwind_config) as f:
            config_content = f.read()
        
        # Should have custom colors or extended theme
        custom_elements = ["extend", "colors", "fontFamily", "animation"]
        has_customization = any(element in config_content for element in custom_elements)
        assert has_customization, "Should have CSS customizations in Tailwind config"