// main.js - Nhạc trưởng lắp ghép các phần học
import { TIER1_DATA } from './data/tier1-data.js';
import { mountTier1Alphabet } from './modules/tier1-alphabet.js';
// Sau này viết xong Tầng 2, Tầng 3 bạn chỉ cần mở comment 2 dòng dưới:
// import { mountTier2Mutation } from './modules/tier2-mutation.js';
// import { mountTier3WordPuzzle } from './modules/tier3-word-puzzle.js';

const appContainer = document.getElementById('app-container');

function startApp() {
  // Mặc định mở Tầng 1
  mountTier1Alphabet(appContainer, TIER1_DATA, {
    onLevelComplete: (info) => {
      console.log('Đã vượt qua Level:', info.level);
    },
    onAllComplete: () => {
      console.log('Chúc mừng! Đã hoàn thành toàn bộ 10 Level Tầng 1 -> Mở khóa Tầng 2!');
    }
  });
}

startApp();