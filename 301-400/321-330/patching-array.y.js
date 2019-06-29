/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  let cover = 0, needCount = 0, j = 0
  for (let i = 1; i <= n; i++) {
    while (j < nums.length && nums[j] == i) {
      cover += i
      j++
    }
    if (cover < i) {
      if (j >= nums.length) {
        //超出范围的第一个
        let t = i
        while (t <= n) {
          t *= 2
          needCount++
        }
        return needCount
      }
      needCount++
      cover += i
    }
  }
  return needCount
};

console.log(minPatches([1, 3], 6))
console.log(minPatches([1, 5, 10], 20))
console.log(minPatches([1, 2, 2], 5))
console.log(minPatches([1, 2, 31, 33], 2147483647))
console.log(minPatches([], 7))
console.log(minPatches([1, 1, 3, 6, 7, 8, 8, 8, 13, 15, 16, 16, 17, 19, 21, 21, 24, 25, 26, 30, 30, 31, 32, 32, 35, 36, 43, 48, 50, 50, 54, 55, 56, 58, 60, 61, 63, 63, 64, 66, 67, 74, 76, 76, 79, 82, 82, 86, 87, 87, 89, 90, 92, 92, 92, 93, 94, 95, 95, 96, 98, 98, 102, 102, 103, 103, 105, 106, 108, 108, 112, 114, 116, 116, 118, 118, 118, 118, 122, 124, 124, 127, 129, 130, 133, 135, 136, 137, 138, 139, 142, 145, 146, 146, 147, 148, 151, 152, 155, 155, 156, 168, 169, 169, 172, 174, 180, 185, 188, 188, 191, 192, 197, 200, 201, 203, 203, 206, 207, 208, 211, 211, 212, 213, 215, 215, 216, 216, 217, 217, 220, 222, 223, 225, 226, 226, 231, 232, 237, 237, 240, 242, 242, 243, 244, 246, 249, 251, 252, 252, 253, 254, 255, 255, 255, 256, 258, 258, 259, 261, 262, 263, 263, 265, 265, 265, 265, 266, 271, 273, 276, 277, 277, 278, 283, 284, 287, 289, 293, 293, 295, 295, 296, 297, 298, 301, 302, 302, 304, 305, 305, 308, 308, 308, 309, 309, 310, 317, 317, 317, 322, 329, 334, 335, 339, 342, 343, 344, 346, 347, 347, 348, 348, 355, 356, 357, 358, 358, 361, 362, 365, 365, 366, 369, 369, 372, 376, 376, 377, 380, 380, 383, 386, 387, 387, 389, 393, 402, 403, 404, 406, 407, 408, 409, 410, 411, 415, 416, 419, 424, 425, 426, 429, 429, 431, 432, 437, 440, 443, 445, 445, 449, 449, 451, 453, 454, 455, 456, 457, 460, 466, 466, 468, 471, 471, 471, 479, 479, 482, 482, 484, 484, 485, 491, 495, 496, 497, 503, 508, 510, 510, 510, 510, 512, 518, 518, 519, 533, 537, 539, 540, 541, 541, 542, 543, 543, 544, 545, 547, 549, 550, 551, 553, 555, 556, 560, 564, 569, 569, 569, 569, 575, 578, 581, 581, 581, 583, 585, 585, 588, 589, 589, 592, 593, 594, 594, 595, 595, 596, 597, 597, 600, 602, 606, 607, 612, 612, 615, 616, 618, 619, 619, 621, 622, 622, 625, 628, 629, 629, 630, 632, 633, 633, 634, 634, 637, 637, 638, 638, 642, 642, 644, 645, 646, 647, 648, 650, 651, 653, 654, 655, 656, 662, 664, 665, 665, 671, 671, 676, 680, 682, 685, 689, 689, 691, 691, 693, 694, 695, 699, 699, 700, 701, 705, 705, 705, 708, 709, 711, 711, 711, 714, 715, 717, 718, 718, 719, 719, 720, 721, 721, 721, 722, 725, 728, 729, 732, 733, 733, 735, 735, 737, 738, 739, 739, 742, 742, 742, 743, 746, 748, 749, 750, 751, 752, 754, 756, 757, 758, 759, 759, 761, 761, 768, 772, 773, 775, 776, 776, 778, 779, 780, 781, 781, 784, 785, 786, 789, 789, 794, 796, 796, 800, 801, 803, 811, 813, 813, 814, 815, 815, 815, 817, 818, 818, 818, 819, 819, 819, 825, 826, 826, 827, 827, 828, 829, 831, 834, 835, 837, 837, 838, 838, 839, 839, 842, 849, 849, 850, 850, 850, 857, 859, 862, 867, 867, 869, 870, 870, 871, 871, 872, 872, 872, 875, 876, 880, 880, 881, 883, 886, 891, 892, 894, 898, 898, 899, 900, 902, 905, 905, 909, 910, 912, 917, 918, 918, 921, 921, 922, 922, 925, 925, 930, 932, 934, 939, 940, 943, 944, 945, 946, 947, 950, 951, 951, 955, 957, 958, 960, 961, 964, 965, 965, 966, 966, 969, 972, 973, 974, 976, 976, 976, 978, 979, 984, 987, 987, 987, 989, 990, 990, 992, 993, 994, 995, 995, 997, 999, 1000]
  , 432636))

console.log(minPatches([13, 84, 129, 325, 397, 487, 522, 751, 845, 875, 1028, 1032, 1155, 1429, 1487, 1505, 1587, 1696, 1780, 1800, 1817, 1823, 1843, 1969, 1980, 2442, 2478, 2682, 2735, 2771, 3128, 3131, 3198, 3461, 3571, 3599, 3644, 3757, 3783, 3981, 4020, 4020, 4427, 4483, 4747, 4869, 5115, 5408, 5443, 5507, 5519, 5556, 5562, 5735, 6057, 6502, 6638, 6718, 6832, 6902, 7010, 7099, 7143, 7189, 7191, 7237, 7238, 7294, 7348, 7620, 7644, 7687, 7699, 7848, 7888, 8006, 8012, 8134, 8190, 8333, 8379, 8381, 8541, 8653, 8740, 8924, 8977, 9111, 9307, 9329, 9337, 9480, 9494, 9506, 9634, 9671, 9754, 9925, 9942, 9975]
  , 4767909))


