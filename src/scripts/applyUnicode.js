// Utility to apply Unicode transformations
export const applyUnicode = (text, transformType) => {
    const boldMap = {
      a: '𝗮', b: '𝗯', c: '𝗰', d: '𝗱', e: '𝗲', f: '𝗳', g: '𝗴', h: '𝗵', i: '𝗶', j: '𝗷', k: '𝗸', l: '𝗹', m: '𝗺',
      n: '𝗻', o: '𝗼', p: '𝗽', q: '𝗾', r: '𝗿', s: '𝘀', t: '𝘁', u: '𝘂', v: '𝘃', w: '𝘄', x: '𝘅', y: '𝘆', z: '𝘇',
      A: '𝗔', B: '𝗕', C: '𝗖', D: '𝗗', E: '𝗘', F: '𝗙', G: '𝗚', H: '𝗛', I: '𝗜', J: '𝗝', K: '𝗞', L: '𝗟', M: '𝗠',
      N: '𝗡', O: '𝗢', P: '𝗣', Q: '𝗤', R: '𝗥', S: '𝗦', T: '𝗧', U: '𝗨', V: '𝗩', W: '𝗪', X: '𝗫', Y: '𝗬', Z: '𝗭',
      0: '𝟬', 1: '𝟭', 2: '𝟮', 3: '𝟯', 4: '𝟰', 5: '𝟱', 6: '𝟲', 7: '𝟳', 8: '𝟴', 9: '𝟵',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    };
    
    const italicMap = {
      a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫', k: '𝘬', l: '𝘭', m: '𝘮',
      n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵', u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻',
      A: '𝘈', B: '𝘉', C: '𝘊', D: '𝘋', E: '𝘌', F: '𝘍', G: '𝘎', H: '𝘏', I: '𝘐', J: '𝘑', K: '𝘒', L: '𝘓', M: '𝘔',
      N: '𝘕', O: '𝘖', P: '𝘗', Q: '𝘘', R: '𝘙', S: '𝘚', T: '𝘛', U: '𝘜', V: '𝘝', W: '𝘞', X: '𝘟', Y: '𝘠', Z: '𝘡',
      0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    };
    
    const underlineMap = {
      a: '𝚊̲', b: '𝚋̲', c: '𝚌̲', d: '𝚍̲', e: '𝚎̲', f: '𝚏̲', g: '𝚐̲', h: '𝚑̲', i: '𝚒̲', j: '𝚓̲',k: '𝚔̲', l: '𝚕̲', m: '𝚖̲', 
      n: '𝚗̲', o: '𝚘̲', p: '𝚙̲', q: '𝚚̲', r: '𝚛̲', s: '𝚜̲', t: '𝚝̲',      u: '𝚞̲', v: '𝚟̲', w: '𝚠̲', x: '𝚡̲', y: '𝚢̲', z: '𝚣̲', 
      A: '𝙰̲', B: '𝙱̲', C: '𝙲̲', D: '𝙳̲',
      E: '𝙴̲', F: '𝙵̲', G: '𝙶̲', H: '𝙷̲', I: '𝙸̲', J: '𝙹̲', K: '𝙺̲', L: '𝙻̲', M: '𝙼̲', 
      N: '𝙽̲', O: '𝙾̲', P: '𝙿̲', Q: '𝚀̲', R: '𝚁̲', S: '𝚂̲', T: '𝚃̲', U: '𝚄̲', V: '𝚅̲', W: '𝚆̲', X: '𝚇̲', Y: '𝚈̲', Z: '𝚉̲', 
      0: '𝟶̲', 1: '𝟷̲', 2: '𝟸̲', 3: '𝟹̲', 4: '𝟺̲', 5: '𝟻̲', 6: '𝟼̲', 7: '𝟽̲', 8: '𝟾̲', 9: '𝟿̲',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    }; 

    const strikethroughMap = {
      a: '𝚊̶', b: '𝚋̶', c: '𝚌̶', d: '𝚍̶', e: '𝚎̶', f: '𝚏̶', g: '𝚐̶', h: '𝚑̶', i: '𝚒̶', j: '𝚓̶', k: '𝚔̶', l: '𝚕̶', m: '𝚖̶', 
      n: '𝚗̶', o: '𝚘̶', p: '𝚙̶', q: '𝚚̶', r: '𝚛̶', s: '𝚜̶', t: '𝚝̶', u: '𝚞̶', v: '𝚟̶', w: '𝚠̶', x: '𝚡̶', y: '𝚢̶', z: '𝚣̶', 
      A: '𝙰̶', B: '𝙱̶', C: '𝙲̶', D: '𝙳̶', E: '𝙴̶', F: '𝙵̶', G: '𝙶̶', H: '𝙷̶', I: '𝙸̶', J: '𝙹̶', K: '𝙺̶', L: '𝙻̶', M: '𝙼̶', 
      N: '𝙽̶', O: '𝙾̶', P: '𝙿̶', Q: '𝚀̶', R: '𝚁̶', S: '𝚂̶', T: '𝚃̶', U: '𝚄̶', V: '𝚅̶', W: '𝚆̶', X: '𝚇̶', Y: '𝚈̶', Z: '𝚉̶', 
      0: '𝟶̶', 1: '𝟷̶', 2: '𝟸̶', 3: '𝟹̶', 4: '𝟺̶', 5: '𝟻̶', 6: '𝟼̶', 7: '𝟽̶', 8: '𝟾̶', 9: '𝟿̶',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    };
    
    const boldSerifMap = {
      'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 
      'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳', 
      'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 
      'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙', 
      0: '𝟎', 1: '𝟏', 2: '𝟐', 3: '𝟑', 4: '𝟒', 5: '𝟓', 6: '𝟔', 7: '𝟕', 8: '𝟖', 9: '𝟗',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    };

    const italicSerifMap = {
      'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 
      'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧', 
      'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 
      'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍', 
      0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    };

    const boldItalicSerifMap = {
      'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 
      'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛', 
      'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 
      'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁', 
      0: '𝟎', 1: '𝟏', 2: '𝟐', 3: '𝟑', 4: '𝟒', 5: '𝟓', 6: '𝟔', 7: '𝟕', 8: '𝟖', 9: '𝟗',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    };

    const monoMap = {
      'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 
      'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',       
      'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 
      'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',      
      '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    };

    const scriptMap = {
      a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲', j: '𝓳', k: '𝓴', l: '𝓵', m: '𝓶', 
      n: '𝓷', o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽', u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃', 
      A: '𝓐', B: '𝓑', C: '𝓒', D: '𝓓', E: '𝓔', F: '𝓕', G: '𝓖', H: '𝓗', I: '𝓘', J: '𝓙', K: '𝓚', L: '𝓛', M: '𝓜', 
      N: '𝓝', O: '𝓞', P: '𝓟', Q: '𝓠', R: '𝓡', S: '𝓢', T: '𝓣', U: '𝓤', V: '𝓥', W: '𝓦', X: '𝓧', Y: '𝓨', Z: '𝓩',
      0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    };

    const fullwidthMap = {
      a: 'ａ', b: 'ｂ', c: 'ｃ', d: 'ｄ', e: 'ｅ', f: 'ｆ', g: 'ｇ', h: 'ｈ', i: 'ｉ', j: 'ｊ', k: 'ｋ', l: 'ｌ', m: 'ｍ', 
      n: 'ｎ', o: 'ｏ', p: 'ｐ', q: 'ｑ', r: 'ｒ', s: 'ｓ', t: 'ｔ', u: 'ｕ', v: 'ｖ', w: 'ｗ', x: 'ｘ', y: 'ｙ', z: 'ｚ', 
      A: 'Ａ', B: 'Ｂ', C: 'Ｃ', D: 'Ｄ', E: 'Ｅ', F: 'Ｆ', G: 'Ｇ', H: 'Ｈ', I: 'Ｉ', J: 'Ｊ', K: 'Ｋ', L: 'Ｌ', M: 'Ｍ', 
      N: 'Ｎ', O: 'Ｏ', P: 'Ｐ', Q: 'Ｑ', R: 'Ｒ', S: 'Ｓ', T: 'Ｔ', U: 'Ｕ', V: 'Ｖ', W: 'Ｗ', X: 'Ｘ', Y: 'Ｙ', Z: 'Ｚ',
      0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
      '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')'
    };

    let map;

    // Select the appropriate transformation map
    switch (transformType) {
        case 'bold':
            map = boldMap;
            break;
        case 'italic':
            map = italicMap;
            break;
        case 'underline':
            map = underlineMap;
            break;
        case 'strikethrough':
            map = strikethroughMap;
            break;
        case 'boldSerif':
            map = boldSerifMap;
            break;
        case 'italicSerif':
            map = italicSerifMap;
            break;
        case 'boldItalicSerif':
            map = boldItalicSerifMap;
            break;
        case 'mono':
          map = monoMap;
          break;
        case 'script':
          map = scriptMap;
          break;
        case 'fullwidth':
            map = fullwidthMap;
            break;
        default:
            return text; // If no valid transformType, return original text
    }

    // Transform each character in the text using the selected map
    return text.split('').map(char => map[char] || char).join('');
};

export const bulletMap = {
  bullet: '• ',             // Icon for bullet
  squarebullet: '▪️ ',
  tickBullet: '☑️ ',         // Icon for tick bullet
  sectionBullet: '# ',      // Icon for section bullet
  num0: '0️⃣ ',
  num1: '1️⃣ ',
  num2: '2️⃣ ',
  num3: '3️⃣ ',
  num4: '4️⃣ ',
  num5: '5️⃣ ',
  num6: '6️⃣ ',
  num7: '7️⃣ ',
  num8: '8️⃣ ',
  num9: '9️⃣ ',
  blockquote: "❝ ❞"
};