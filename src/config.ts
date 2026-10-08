export const assembly = {
  name: 'hg38',
  uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz',
  refNameAliases: {
    uri: 'https://jbrowse.org/genomes/GRCh38/hg38_aliases.txt',
  },
  cytobands: {
    uri: 'https://jbrowse.org/genomes/GRCh38/cytoBand.txt',
  },
  geneticCodes: { chrM: 2 },
}

export const tracks = [
  {
    trackId: 'ncbi_genes',
    name: 'NCBI RefSeq Genes',
    category: ['Genes'],
    uri: 'https://jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz',
    textSearching: {
      textSearchAdapter: {
        uri: 'https://jbrowse.org/genomes/GRCh38/ncbi_refseq/trix/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.ix',
      },
    },
  },
  {
    trackId: 'repeats_hg38',
    name: 'Repeats',
    category: ['Annotation'],
    uri: 'https://jbrowse.org/genomes/GRCh38/repeats.bb',
  },
  {
    trackId: 'NA12878_exome',
    name: 'NA12878 Exome',
    category: ['1000 Genomes', 'Alignments'],
    uri: 'https://jbrowse.org/genomes/GRCh38/alignments/NA12878/NA12878.alt_bwamem_GRCh38DH.20150826.CEU.exome.cram',
  },
  {
    trackId: '1000g_vcf',
    name: '1000 Genomes Variant Calls',
    category: ['1000 Genomes', 'Variants'],
    uri: 'https://jbrowse.org/genomes/GRCh38/variants/ALL.wgs.shapeit2_integrated_snvindels_v2a.GRCh38.27022019.sites.vcf.gz',
  },
  {
    trackId: 'phyloP100way',
    name: 'hg38.100way.phyloP100way',
    category: ['Conservation'],
    uri: 'https://hgdownload.soe.ucsc.edu/goldenpath/hg38/phyloP100way/hg38.phyloP100way.bw',
  },
]

export const config = {
  assemblies: [assembly],
  tracks,
  defaultSession: {
    name: 'My session',
    views: [
      {
        type: 'LinearGenomeView',
        assembly: 'hg38',
        loc: '10:29,838,565..29,838,850',
        tracks: ['ncbi_genes', 'NA12878_exome', 'phyloP100way', '1000g_vcf'],
      },
    ],
  },
}
