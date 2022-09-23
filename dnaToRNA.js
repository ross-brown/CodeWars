
/*DESCRIPTION:
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA. */

// ANSWER //

function DNAtoRNA(dna) {
  let RNA = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      RNA.push('U')
    } else {
      RNA.push(dna[i])
    }
  }
  return RNA.join('')
}
