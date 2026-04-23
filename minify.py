#!/usr/bin/env python3
import os
import re

def minify_css(content):
    """Simple CSS minifier"""
    # Remove comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove whitespace
    content = re.sub(r'\s+', ' ', content)
    content = re.sub(r'\s*([{}:;,>+~])\s*', r'\1', content)
    return content.strip()

def minify_js(content):
    """Simple JS minifier"""
    # Remove single-line comments
    content = re.sub(r'//.*?$', '', content, flags=re.MULTILINE)
    # Remove multi-line comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove unnecessary whitespace
    content = re.sub(r'\s+', ' ', content)
    content = re.sub(r'\s*([{}:;,()[\]=])\s*', r'\1', content)
    return content.strip()

files = [
    ('css/site.css', 'css/site.min.css', minify_css),
    ('css/animate.css', 'css/animate.min.css', minify_css),
    ('css/scss/dist/timeline.css', 'css/scss/dist/timeline.min.css', minify_css),
    ('css/scss/dist/typed.css', 'css/scss/dist/typed.min.css', minify_css),
    ('js/site.js', 'js/site.min.js', minify_js),
    ('js/jquery.easing.js', 'js/jquery.easing.min.js', minify_js),
]

for src, dst, minifier in files:
    if os.path.exists(src):
        with open(src, 'r', encoding='utf-8') as f:
            content = f.read()
        minified = minifier(content)
        with open(dst, 'w', encoding='utf-8') as f:
            f.write(minified)
        print(f"✓ {dst}")
    else:
        print(f"⚠ {src} not found")

print("Minification complete!")