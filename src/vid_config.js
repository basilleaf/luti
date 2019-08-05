export const img_height = 1080;
export const img_width = 1920;

export const opening_bounds = [[5390, 9590], [6490, 11530]];

export const rows = 10; // square grid number of rows/columns, change in css too!

export const init_center = [
  rows * img_height / 2 + img_height / 2,
  rows * img_width / 2 + img_width / 2
].map(e => Math.ceil(e));

export const base_url = "https://s3.amazonaws.com/lifeundertheice/";

export const init_zoom = 0;

export const hls_config = {
  capLevelToPlayerSize: true,
  maxBufferSize: 30,
  maxBufferLength: 5
};

export const vid_config = {
  muted: true,
  autoplay: true,
  loop: true
};

export const style = { height: img_height + "px", width: img_width + "px" };

const overlap = 10;
// builds a list of loc bounds that make a grid based on rows, with small overlaps
export const all_locs = [];
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < rows; j++) {
    all_locs.push([
      [i * img_height - overlap, j * img_width - overlap],
      [(i + 1) * img_height + overlap, (j + 1) * img_width + overlap]
    ]);
  }
}

// the commented out ones didn't seem to want to become public, try again later #todo
export const all_vid_names = [
  "010519_JettySeafloor_NikonE200_10x_TriangleDiatom_edit.m3u8",
  "042519_LakeBonneyMicrobialMat_NikonE200_10x_BF_PinkRotifer_edit.m3u8",
  "042919_LakeBonneyMicrobialMat_NikonE200_40x_BF_Nostoc.m3u8",
  "051319_LakeBonneyMicrobialMat_20x_BF_PinkRotifer_01_edit.m3u8",
  "051319_LakeBonneyMicrobialMat_4x_BF_2Nematodes_edit.m3u8",
  "111718_LakeBonneySnowOutflowDirt_NikonE200_100x_Bacteria_02.m3u8",
  "111718_LakeBonneyUplandPondsMicrobialMat_NikonE200_100x_Bacteria_01.m3u8",
  "111718_LakeBonneyUplandPondsMicrobialMat_NikonE200_100x_Bacteria_02.m3u8",
  "111718_LakeBonneyUplandPondsMicrobialMat_NikonE200_100x_Bacteria_04.m3u8",
  "111718_LakeBonneyUplandPondsMicrobialMat_NikonE200_100x_GreenCircle.m3u8",
  "112018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotiferTun_01.m3u8",
  "112018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_02.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_Beginning.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_End.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_40x_Spiral_02.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_40x_TwoSpirals_02.m3u8",
  "112118_CanadaGlacierCryoconite2_NikonE200_100x_Bacteria_01.m3u8",
  "112118_CanadaGlacierCryoconite2_NikonE200_100x_Tail.m3u8",
  "112118_CanadaGlacierCryoconite2_NikonE200_10x_Ciliate.m3u8",
  "112118_CanadaGlacierCryoconite2_NikonE200_40x_CiliateThing.m3u8",
  "112118_CanadaGlacierCryoconite2_NikonE200_40x_Ciliate_02.m3u8",
  "112218_LowerCanadaGlacierStream_NikonE200_10x_Tardigrade.m3u8",
  "112218_LowerCanadaGlacierStream_NikonE200_40x_Ciliate_01.m3u8",
  "112218_LowerCanadaGlacierStream_NikonE200_40x_Ciliate_02.m3u8",
  "112218_LowerCanadaGlacierStream_NikonE200_40x_TardigradeWakingUp.m3u8",
  "112218_LowerCanadaGlacierStream_NikonE200_40x_Tardigrade_02.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_Circle07.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_Circle_01.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_Circle_02.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_Circle_03.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_Circle_04.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_Circle_05.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_Circle_06.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_DiatomChain_01.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_DiatomChain_03.MOV.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_DiatomDead.m3u8",
  "112718_ErebusSeaIceHole_NikonE200_40x_DiatomSkinny.m3u8",
  "112718_JettySeaIceCeiling_NikonE200_10x_DiatomTrafficJam_01.m3u8",
  "112718_JettySeaIceCeiling_NikonE200_40x_Chain.m3u8",
  "112718_JettySeaIceCeiling_NikonE200_40x_Circle_02.m3u8",
  "112718_JettySeaIceCeiling_NikonE200_40x_RedBubbles_01.m3u8",
  "112718_JettySeaIceCeiling_NikonE200_40x_RedBubbles_02.m3u8",
  "112718_JettySeaIceCeiling_NikonE200_40x_TwoCircles.m3u8",
  "112818_JettySeafloor_NikonE200_40x_Stars.m3u8",
  "112918_JettySeafloor_NikonE200_10x_HornedBlob.m3u8",
  "112918_JettySeafloor_NikonE200_40x_Circle_01.m3u8",
  "112918_JettySeafloor_NikonE200_40x_Diatom_01.m3u8",
  "112918_JettySeafloor_NikonSMZ1000_4x_Ostracod_02.m3u8",
  "113018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_01.m3u8",
  "113018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_02.m3u8",
  "113018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_05.m3u8",
  "113018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_06.m3u8",
  "113018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_07.m3u8",
  "113018_JettySeafloor_NikonE200_40x_Circle.m3u8",
  "113018_JettySeafloor_NikonE200_40x_DiatomChain_01.m3u8",
  "120118_JettySeaIceCeiling_NikonE200_10x_DiatomStructure_01.m3u8",
  "120118_LowerCanadaGlacierStream_NikonE200_10x_Tardigrade_02.m3u8",
  "120318_LakeHoareSoil_NikonE200_10x_Nematode_01.m3u8",
  "120318_LakeHoareSoil_NikonE200_10x_Nematode_02.m3u8",
  "123018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_01_edit.m3u8",
  "123018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_02_edit.m3u8",
  "123018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_03_edit.m3u8",
  "123018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_04_edit.m3u8",
  "123018_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer_05_edit.m3u8",
  "123018_CanadaGlacierCryoconite1_NikonE200_40x_Circle_edit.m3u8",
  "123018_CanadaGlacierCryoconite1_NikonE200_40x_Spiral_edit.m3u8",
  "123018_JettySeafloor_NikonE200_Diatom_02_edit.m3u8"
];
