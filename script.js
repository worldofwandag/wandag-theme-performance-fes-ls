// ============================================
// SECTION 1: CSS Variables Editor
// ============================================

const primaryColor = document.getElementById('primaryColor');
const secondaryColor = document.getElementById('secondaryColor');
const bgColor = document.getElementById('bgColor');
const textColor = document.getElementById('textColor');
const borderRadius = document.getElementById('borderRadius');
const spacing = document.getElementById('spacing');

const variableDemo = document.getElementById('variableDemo');

function updateVariables() {
  const primary = primaryColor.value;
  const secondary = secondaryColor.value;
  const bg = bgColor.value;
  const text = textColor.value;
  const radius = borderRadius.value + 'px';
  const space = spacing.value + 'px';

  // Update CSS variables on the demo container
  variableDemo.style.setProperty('--primary-color', primary);
  variableDemo.style.setProperty('--secondary-color', secondary);
  variableDemo.style.setProperty('--background-color', bg);
  variableDemo.style.setProperty('--text-color', text);
  variableDemo.style.setProperty('--border-radius', radius);
  variableDemo.style.setProperty('--spacing', space);

  // Update value displays
  document.getElementById('primaryColorValue').textContent = primary;
  document.getElementById('secondaryColorValue').textContent = secondary;
  document.getElementById('bgColorValue').textContent = bg;
  document.getElementById('textColorValue').textContent = text;
  document.getElementById('radiusValue').textContent = radius;
  document.getElementById('spacingValue').textContent = space;

  // Update code display
  document.getElementById('codePrimary').textContent = primary;
  document.getElementById('codeSecondary').textContent = secondary;
  document.getElementById('codeBg').textContent = bg;
  document.getElementById('codeText').textContent = text;
  document.getElementById('codeRadius').textContent = radius;
  document.getElementById('codeSpacing').textContent = space;
}

primaryColor.addEventListener('input', updateVariables);
secondaryColor.addEventListener('input', updateVariables);
bgColor.addEventListener('input', updateVariables);
textColor.addEventListener('input', updateVariables);
borderRadius.addEventListener('input', updateVariables);
spacing.addEventListener('input', updateVariables);

// Reset Variables
document.getElementById('resetVariables').addEventListener('click', function() {
  primaryColor.value = '#6b4c9a';
  secondaryColor.value = '#c9a227';
  bgColor.value = '#1a1a2e';
  textColor.value = '#e8e8e8';
  borderRadius.value = 12;
  spacing.value = 16;
  updateVariables();
});

// ============================================
// SECTION 2: Theme Presets (Tim Burton Style)
// ============================================

const themes = {
  gothic: {
    primary: '#6b4c9a',
    secondary: '#c9a227',
    background: '#1a1a2e',
    text: '#e8e8e8'
  },
  beetlejuice: {
    primary: '#4a7c59',
    secondary: '#9b4dca',
    background: '#0d0d0d',
    text: '#e8e8e8'
  },
  corpse: {
    primary: '#5c8a8a',
    secondary: '#8b7d9b',
    background: '#1a2e2e',
    text: '#d4e5e5'
  },
  pumpkin: {
    primary: '#e07020',
    secondary: '#8b4513',
    background: '#1a1510',
    text: '#f5e6d3'
  },
  nightmare: {
    primary: '#e8e8e8',
    secondary: '#4a4a4a',
    background: '#0a0a0a',
    text: '#ffffff'
  },
  wonderland: {
    primary: '#b8336a',
    secondary: '#00a896',
    background: '#2b2d42',
    text: '#edf2f4'
  }
};

const themeDemo = document.getElementById('themeDemo');
const themeCode = document.getElementById('themeCode');

document.querySelectorAll('.theme-preset').forEach(btn => {
  btn.addEventListener('click', function() {
    // Update active state
    document.querySelectorAll('.theme-preset').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const themeName = this.dataset.theme;
    const theme = themes[themeName];

    // Apply theme to demo
    themeDemo.style.setProperty('--primary-color', theme.primary);
    themeDemo.style.setProperty('--secondary-color', theme.secondary);
    themeDemo.style.setProperty('--background-color', theme.background);
    themeDemo.style.setProperty('--text-color', theme.text);

    // Update code display
    themeCode.innerHTML = `<span class="selector">:root</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;<span class="property">--primary-color</span><span class="punctuation">:</span> <span class="value">${theme.primary}</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="property">--secondary-color</span><span class="punctuation">:</span> <span class="value">${theme.secondary}</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="property">--background-color</span><span class="punctuation">:</span> <span class="value">${theme.background}</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="property">--text-color</span><span class="punctuation">:</span> <span class="value">${theme.text}</span><span class="punctuation">;</span><br>
<span class="punctuation">}</span>`;
  });
});

// ============================================
// SECTION 3: Dark Mode Toggle
// ============================================

const darkModeDemo = document.getElementById('darkModeDemo');
const darkModeCode = document.getElementById('darkModeCode');
const dmPreview = darkModeDemo.querySelector('.dm-preview');
const dmToggleMini = darkModeDemo.querySelector('.dm-toggle-mini');

const lightModeCode = `<span class="comment">/* Current mode: Light */</span><br><br>
<span class="selector">:root</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;<span class="property">--bg-color</span><span class="punctuation">:</span> <span class="value">#e8e4e0</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="property">--text-color</span><span class="punctuation">:</span> <span class="value">#1a1a2e</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="property">--card-bg</span><span class="punctuation">:</span> <span class="value">#ffffff</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="property">--border-color</span><span class="punctuation">:</span> <span class="value">#cccccc</span><span class="punctuation">;</span><br>
<span class="punctuation">}</span>`;

const darkModeCodeStr = `<span class="comment">/* Current mode: Dark */</span><br><br>
<span class="selector">.dark-theme</span> <span class="punctuation">{</span><br>
&nbsp;&nbsp;<span class="property">--bg-color</span><span class="punctuation">:</span> <span class="value">#0d0d0d</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="property">--text-color</span><span class="punctuation">:</span> <span class="value">#e8e8e8</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="property">--card-bg</span><span class="punctuation">:</span> <span class="value">#1a1a2e</span><span class="punctuation">;</span><br>
&nbsp;&nbsp;<span class="property">--border-color</span><span class="punctuation">:</span> <span class="value">#333333</span><span class="punctuation">;</span><br>
<span class="punctuation">}</span>`;

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const mode = this.dataset.mode;

    if (mode === 'dark') {
      dmPreview.classList.remove('light');
      dmPreview.classList.add('dark');
      dmToggleMini.textContent = '🌙';
      darkModeCode.innerHTML = darkModeCodeStr;
    } else {
      dmPreview.classList.remove('dark');
      dmPreview.classList.add('light');
      dmToggleMini.textContent = '☀️';
      darkModeCode.innerHTML = lightModeCode;
    }
  });
});

// ============================================
// Global Dark/Light Mode Toggle (Nav Button)
// ============================================

const globalThemeToggle = document.getElementById('globalThemeToggle');
let isLightMode = false;

globalThemeToggle.addEventListener('click', function() {
  isLightMode = !isLightMode;
  document.body.classList.toggle('dark-theme', !isLightMode);
  document.body.classList.toggle('light-theme', isLightMode);
  
  if (isLightMode) {
    this.textContent = '🌙 Dark Mode';
  } else {
    this.textContent = '☀️ Light Mode';
  }
});

// ============================================
// Initialize
// ============================================

updateVariables();
