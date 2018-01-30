const sra = require('bionode-sra')
const ncbi = require('bionode-ncbi')

// const fastqDump = sra('fastq-dump')
// fastqDump('SRR1509835.sra')

const search_result = ncbi.search("PRJNA183192", "sra")