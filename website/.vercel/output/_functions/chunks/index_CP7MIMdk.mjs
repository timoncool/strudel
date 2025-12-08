import { cb as noteToMidi, T as registerSound, aC as getADSRValues, cB as getSoundIndex, b3 as getAudioContext, az as getParamADSR, aI as getVibratoOscillator, aH as getPitchEnvelope, aQ as onceEnded, cC as freqToMidi, c8 as Pattern, cD as getPlayableNoteValue } from './MiniRepl_Ntj7iAxy.mjs';

const gm = {
  gm_piano: [
    //'gm_acoustic_piano': [
    // Acoustic Grand Piano: Piano
    '0000_JCLive_sf2_file',
    '0000_FluidR3_GM_sf2_file',
    '0000_Aspirin_sf2_file',
    '0000_Chaos_sf2_file',
    '0000_GeneralUserGS_sf2_file',
    //0000_SBLive_sf2
    //0000_SoundBlasterOld_sf2
    '0001_FluidR3_GM_sf2_file',
    '0001_GeneralUserGS_sf2_file',
    //],
    //'gm_bright_acoustic_piano': [
    // Bright Acoustic Piano: Piano
    '0010_Aspirin_sf2_file',
    '0010_Chaos_sf2_file',
    '0010_FluidR3_GM_sf2_file',
    '0010_GeneralUserGS_sf2_file',
    '0010_JCLive_sf2_file',
    //0010_SBLive_sf2
    //0010_SoundBlasterOld_sf2
    '0011_Aspirin_sf2_file',
    '0011_FluidR3_GM_sf2_file',
    '0011_GeneralUserGS_sf2_file',
    '0012_GeneralUserGS_sf2_file',
    //],
    //'gm_electric_grand_piano': [
    // Electric Grand Piano: Piano
    '0020_Aspirin_sf2_file',
    '0020_Chaos_sf2_file',
    '0020_FluidR3_GM_sf2_file',
    '0020_GeneralUserGS_sf2_file',
    '0020_JCLive_sf2_file',
    //0020_SBLive_sf2
    //0020_SoundBlasterOld_sf2
    '0021_Aspirin_sf2_file',
    '0021_GeneralUserGS_sf2_file',
    // ?
    '0022_Aspirin_sf2_file',
    //],
    //'gm_honky_tonk_piano': [
    // Honky_tonk Piano: Piano
    '0030_Aspirin_sf2_file',
    '0030_Chaos_sf2_file',
    '0030_FluidR3_GM_sf2_file',
    '0030_GeneralUserGS_sf2_file',
    '0030_JCLive_sf2_file',
    //0030_SBLive_sf2
    //0030_SoundBlasterOld_sf2
    '0031_Aspirin_sf2_file',
    '0031_FluidR3_GM_sf2_file',
    '0031_GeneralUserGS_sf2_file',
    //0031_SoundBlasterOld_sf2 // pianos until her
  ],
  gm_epiano1: [
    // Electric Piano 1: Piano
    '0040_JCLive_sf2_file',
    '0040_FluidR3_GM_sf2_file',
    '0040_Aspirin_sf2_file',
    '0040_Chaos_sf2_file',
    '0040_GeneralUserGS_sf2_file',
    //0040_SBLive_sf2 // ?
    //0040_SoundBlasterOld_sf2 // ?
    '0041_FluidR3_GM_sf2_file',
    '0041_GeneralUserGS_sf2_file',
    //0041_SoundBlasterOld_sf2 // ?
    '0042_GeneralUserGS_sf2_file',
    '0043_GeneralUserGS_sf2_file',
    '0044_GeneralUserGS_sf2_file',
    //0045_GeneralUserGS_sf2_file // ?
    '0046_GeneralUserGS_sf2_file',
  ],
  gm_epiano2: [
    // Electric Piano 2: Piano
    '0050_JCLive_sf2_file',
    '0050_FluidR3_GM_sf2_file',
    '0050_Aspirin_sf2_file',
    '0050_Chaos_sf2_file',
    // ?
    '0050_GeneralUserGS_sf2_file',
    // cont
    //0050_SBLive_sf2 // ?
    //0050_SoundBlasterOld_sf2 // ?
    '0051_FluidR3_GM_sf2_file',
    '0051_GeneralUserGS_sf2_file',
    //0052_GeneralUserGS_sf2_file // ?
    '0053_GeneralUserGS_sf2_file',
    // normal piano...
    '0054_GeneralUserGS_sf2_file',
  ],
  gm_harpsichord: [
    // Harpsichord: Piano
    '0060_JCLive_sf2_file',
    '0060_FluidR3_GM_sf2_file',
    '0060_Aspirin_sf2_file',
    '0060_Chaos_sf2_file',
    '0060_GeneralUserGS_sf2_file',
    //0060_SBLive_sf2
    //0060_SoundBlasterOld_sf2
    '0061_Aspirin_sf2_file',
    '0061_GeneralUserGS_sf2_file',
    //0061_SoundBlasterOld_sf2
    '0062_GeneralUserGS_sf2_file',
  ],
  gm_clavinet: [
    // Clavinet: Piano
    '0070_JCLive_sf2_file',
    '0070_FluidR3_GM_sf2_file',
    '0070_Aspirin_sf2_file',
    '0070_Chaos_sf2_file',
    // 0070_GeneralUserGS_sf2_file // half broken
    //0070_SBLive_sf2
    //0070_SoundBlasterOld_sf2
    // 0071_GeneralUserGS_sf2_file // half broke
  ],
  gm_celesta: [
    // Celesta: Chromatic Percussion
    '0080_JCLive_sf2_file',
    '0080_Aspirin_sf2_file',
    '0080_Chaos_sf2_file',
    '0080_FluidR3_GM_sf2_file',
    '0080_GeneralUserGS_sf2_file',
    //0080_SBLive_sf2
    //0080_SoundBlasterOld_sf2
    '0081_FluidR3_GM_sf2_file',
    // 0081_GeneralUserGS_sf2_file // weird detuned
    //0081_SoundBlasterOld_sf
  ],
  gm_glockenspiel: [
    // Glockenspiel: Chromatic Percussion
    '0090_JCLive_sf2_file',
    '0090_Aspirin_sf2_file',
    '0090_Chaos_sf2_file',
    '0090_FluidR3_GM_sf2_file',
    '0090_GeneralUserGS_sf2_file',
    //0090_SBLive_sf2
    //0090_SoundBlasterOld_sf2
    //0091_SoundBlasterOld_sf
  ],
  gm_music_box: [
    // Music Box: Chromatic Percussion
    '0100_JCLive_sf2_file',
    '0100_Aspirin_sf2_file',
    '0100_Chaos_sf2_file',
    '0100_FluidR3_GM_sf2_file',
    '0100_GeneralUserGS_sf2_file',
    //0100_SBLive_sf2
    //0100_SoundBlasterOld_sf2
    // 0101_GeneralUserGS_sf2_file // weird detuned
    //0101_SoundBlasterOld_sf
  ],
  gm_vibraphone: [
    // Vibraphone: Chromatic Percussion
    '0110_JCLive_sf2_file',
    '0110_Aspirin_sf2_file',
    '0110_Chaos_sf2_file',
    '0110_FluidR3_GM_sf2_file',
    '0110_GeneralUserGS_sf2_file',
    //0110_SBLive_sf2
    //0110_SoundBlasterOld_sf2
    '0111_FluidR3_GM_sf2_file',
  ],
  gm_marimba: [
    // Marimba: Chromatic Percussion
    '0120_JCLive_sf2_file',
    '0120_Aspirin_sf2_file',
    '0120_Chaos_sf2_file',
    '0120_FluidR3_GM_sf2_file',
    '0120_GeneralUserGS_sf2_file',
    //0120_SBLive_sf2
    //0120_SoundBlasterOld_sf2
    '0121_FluidR3_GM_sf2_file',
    '0121_GeneralUserGS_sf2_file',
  ],
  gm_xylophone: [
    // Xylophone: Chromatic Percussion
    '0130_JCLive_sf2_file',
    '0130_Aspirin_sf2_file',
    '0130_Chaos_sf2_file',
    '0130_FluidR3_GM_sf2_file',
    '0130_GeneralUserGS_sf2_file',
    //0130_SBLive_sf2
    //0130_SoundBlasterOld_sf2
    '0131_FluidR3_GM_sf2_file',
  ],
  gm_tubular_bells: [
    // Tubular Bells: Chromatic Percussion
    '0140_JCLive_sf2_file',
    '0140_Aspirin_sf2_file',
    // 0140_Chaos_sf2_file // same as aspirin?
    '0140_FluidR3_GM_sf2_file',
    '0140_GeneralUserGS_sf2_file',
    //0140_SBLive_sf2
    //0140_SoundBlasterOld_sf2
    '0141_FluidR3_GM_sf2_file',
    //0141_GeneralUserGS_sf2_file
    '0142_GeneralUserGS_sf2_file',
    // 0143_GeneralUserGS_sf2_file // bugg
  ],
  gm_dulcimer: [
    // Dulcimer: Chromatic Percussion
    '0150_Aspirin_sf2_file',
    '0150_Chaos_sf2_file',
    '0150_FluidR3_GM_sf2_file',
    '0150_GeneralUserGS_sf2_file',
    // 0150_JCLive_sf2_file // detuned???
    //0150_SBLive_sf2
    //0150_SoundBlasterOld_sf2
    '0151_FluidR3_GM_sf2_file',
  ],
  gm_drawbar_organ: [
    // Drawbar Organ: Organ
    '0160_JCLive_sf2_file',
    '0160_Aspirin_sf2_file',
    '0160_Chaos_sf2_file',
    '0160_FluidR3_GM_sf2_file',
    '0160_GeneralUserGS_sf2_file',
    //0160_SBLive_sf2
    //0160_SoundBlasterOld_sf2
    '0161_Aspirin_sf2_file',
    '0161_FluidR3_GM_sf2_file',
    //0161_SoundBlasterOld_sf
  ],
  gm_percussive_organ: [
    // Percussive Organ: Organ
    '0170_JCLive_sf2_file',
    '0170_Aspirin_sf2_file',
    '0170_Chaos_sf2_file',
    '0170_FluidR3_GM_sf2_file',
    // 0170_GeneralUserGS_sf2_file // repitched
    //0170_SBLive_sf2
    //0170_SoundBlasterOld_sf2
    '0171_FluidR3_GM_sf2_file',
    // 0171_GeneralUserGS_sf2_file  // repitched
    '0172_FluidR3_GM_sf2_file',
  ],
  gm_rock_organ: [
    // Rock Organ: Organ
    '0180_JCLive_sf2_file',
    '0180_Aspirin_sf2_file',
    '0180_Chaos_sf2_file',
    '0180_FluidR3_GM_sf2_file',
    '0180_GeneralUserGS_sf2_file',
    //0180_SBLive_sf2
    //0180_SoundBlasterOld_sf2
    //0181_Aspirin_sf2_file // flute
    //0181_GeneralUserGS_sf2_file // marimbalike
    //0181_SoundBlasterOld_sf
  ],
  gm_church_organ: [
    // Church Organ: Organ
    '0190_JCLive_sf2_file',
    '0190_Aspirin_sf2_file',
    '0190_Chaos_sf2_file',
    '0190_FluidR3_GM_sf2_file',
    '0190_GeneralUserGS_sf2_file',
    //0190_SBLive_sf2
    //0190_SoundBlasterOld_sf2
    //0191_Aspirin_sf2_file // string??
    //0191_GeneralUserGS_sf2_file // weird organ
    //0191_SoundBlasterOld_sf
  ],
  gm_reed_organ: [
    // Reed Organ: Organ
    '0200_JCLive_sf2_file',
    '0200_Aspirin_sf2_file',
    '0200_Chaos_sf2_file',
    '0200_FluidR3_GM_sf2_file',
    '0200_GeneralUserGS_sf2_file',
    //0200_SBLive_sf2
    //0200_SoundBlasterOld_sf2
    '0201_Aspirin_sf2_file',
    '0201_FluidR3_GM_sf2_file',
    '0201_GeneralUserGS_sf2_file',
    //0201_SoundBlasterOld_sf2
    //0210_Aspirin_sf2_file // buggy
    //0210_Chaos_sf2_file // bugg
  ],
  gm_accordion: [
    // Accordion: Organ
    '0210_JCLive_sf2_file',
    '0210_FluidR3_GM_sf2_file',
    '0210_GeneralUserGS_sf2_file',
    //0210_SBLive_sf2
    //0210_SoundBlasterOld_sf2
    '0211_Aspirin_sf2_file',
    '0211_FluidR3_GM_sf2_file',
    '0211_GeneralUserGS_sf2_file',
    //0211_SoundBlasterOld_sf2
    '0212_GeneralUserGS_sf2_file',
  ],
  gm_harmonica: [
    // Harmonica: Organ
    '0220_FluidR3_GM_sf2_file',
    '0220_JCLive_sf2_file',
    '0220_Aspirin_sf2_file',
    '0220_Chaos_sf2_file',
    '0220_GeneralUserGS_sf2_file',
    //0220_SBLive_sf2
    //0220_SoundBlasterOld_sf2
    '0221_FluidR3_GM_sf2_file',
  ],
  gm_bandoneon: [
    // Tango Accordion: Organ
    '0230_Aspirin_sf2_file',
    '0230_JCLive_sf2_file',
    '0230_Chaos_sf2_file',
    '0230_FluidR3_GM_sf2_file',
    '0230_GeneralUserGS_sf2_file',
    //0230_SBLive_sf2
    //0230_SoundBlasterOld_sf2
    '0231_FluidR3_GM_sf2_file',
    '0231_GeneralUserGS_sf2_file',
    '0231_JCLive_sf2_file',
    //0231_SoundBlasterOld_sf2
    '0232_FluidR3_GM_sf2_file',
    '0233_FluidR3_GM_sf2_file',
  ],
  gm_acoustic_guitar_nylon: [
    // Acoustic Guitar (nylon): Guitar
    '0240_JCLive_sf2_file',
    '0240_Aspirin_sf2_file',
    '0240_Chaos_sf2_file',
    '0240_FluidR3_GM_sf2_file',
    '0240_GeneralUserGS_sf2_file',
    '0240_LK_Godin_Nylon_SF2_file',
    //0240_SBLive_sf2
    //0240_SoundBlasterOld_sf2
    // 0241_GeneralUserGS_sf2_file // organ like
    '0241_JCLive_sf2_file',
    '0242_JCLive_sf2_file',
    '0243_JCLive_sf2_file',
  ],
  gm_acoustic_guitar_steel: [
    // Acoustic Guitar (steel): Guitar
    '0253_Acoustic_Guitar_sf2_file',
    '0250_Aspirin_sf2_file',
    '0250_Chaos_sf2_file',
    '0250_FluidR3_GM_sf2_file',
    '0250_GeneralUserGS_sf2_file',
    // 0250_JCLive_sf2_file // detuned
    '0250_LK_AcousticSteel_SF2_file',
    //0250_SBLive_sf2
    //0250_SoundBlasterOld_sf2
    //0251_Acoustic_Guitar_sf2_file // detuned?
    // 0251_GeneralUserGS_sf2_file // broken: missing pitches
    // 0252_Acoustic_Guitar_sf2_file // detuned..
    // 0252_GeneralUserGS_sf2_file // broken: missing pitches
    '0253_Acoustic_Guitar_sf2_file',
    '0253_GeneralUserGS_sf2_file',
    '0254_Acoustic_Guitar_sf2_file',
    '0254_GeneralUserGS_sf2_file',
    //0255_GeneralUserGS_sf2_file // no guitar.
  ],
  gm_electric_guitar_jazz: [
    // Electric Guitar (jazz): Guitar
    '0260_JCLive_sf2_file',
    '0260_Aspirin_sf2_file',
    '0260_Chaos_sf2_file',
    '0260_FluidR3_GM_sf2_file',
    '0260_GeneralUserGS_sf2_file',
    //0260_SBLive_sf2
    //0260_SoundBlasterOld_sf2
    '0260_Stratocaster_sf2_file',
    '0261_GeneralUserGS_sf2_file',
    //0261_SoundBlasterOld_sf2
    '0261_Stratocaster_sf2_file',
    '0262_Stratocaster_sf2_file',
  ],
  gm_electric_guitar_clean: [
    // Electric Guitar (clean): Guitar
    '0270_Aspirin_sf2_file',
    '0270_Chaos_sf2_file',
    '0270_FluidR3_GM_sf2_file',
    '0270_GeneralUserGS_sf2_file',
    //0270_Gibson_Les_Paul_sf2_file // detuned
    // 0270_JCLive_sf2_file // broken: missing notes
    '0270_SBAWE32_sf2_file',
    //0270_SBLive_sf2
    //0270_SoundBlasterOld_sf2
    '0270_Stratocaster_sf2_file',
    '0271_GeneralUserGS_sf2_file',
    '0271_Stratocaster_sf2_file',
    '0272_Stratocaster_sf2_file',
  ],
  gm_electric_guitar_muted: [
    // Electric Guitar (muted): Guitar
    '0280_Aspirin_sf2_file',
    '0280_Chaos_sf2_file',
    // 0280_FluidR3_GM_sf2_file // broken: wrong notes
    '0280_GeneralUserGS_sf2_file',
    '0280_JCLive_sf2_file',
    //0280_LesPaul_sf2 // missing
    '0280_LesPaul_sf2_file',
    '0280_SBAWE32_sf2_file',
    //0280_SBLive_sf2
    //0280_SoundBlasterOld_sf2
    '0281_Aspirin_sf2_file',
    '0281_FluidR3_GM_sf2_file',
    '0281_GeneralUserGS_sf2_file',
    '0282_FluidR3_GM_sf2_file',
    // 0282_GeneralUserGS_sf2_file // broken: missing notes
    // 0283_GeneralUserGS_sf2_file // missin
  ],
  gm_overdriven_guitar: [
    // Overdriven Guitar: Guitar
    '0290_FluidR3_GM_sf2_file',
    '0290_Aspirin_sf2_file',
    '0290_Chaos_sf2_file',
    '0290_GeneralUserGS_sf2_file',
    //0290_JCLive_sf2_file // detuned....
    //0290_LesPaul_sf2 // broken
    '0290_LesPaul_sf2_file',
    '0290_SBAWE32_sf2_file',
    //0290_SBLive_sf2
    //0290_SoundBlasterOld_sf2
    // 0291_Aspirin_sf2_file // broken
    // 0291_LesPaul_sf2 // broken
    '0291_LesPaul_sf2_file',
    '0291_SBAWE32_sf2_file',
    //0291_SoundBlasterOld_sf2
    '0292_Aspirin_sf2_file',
    // 0292_LesPaul_sf2 // broken
    '0292_LesPaul_sf2_file',
  ],
  gm_distortion_guitar: [
    // Distortion Guitar: Guitar
    '0300_FluidR3_GM_sf2_file',
    '0300_Aspirin_sf2_file',
    '0300_Chaos_sf2_file',
    '0300_GeneralUserGS_sf2_file',
    // 0300_JCLive_sf2_file // broken
    // 0300_LesPaul_sf2 // broken
    '0300_LesPaul_sf2_file',
    //0300_SBAWE32_sf2_file // _2 octave
    //0300_SBLive_sf2
    //0300_SoundBlasterOld_sf2
    // 0301_Aspirin_sf2_file // missing
    //0301_FluidR3_GM_sf2_file // weird broken bell
    // 0301_GeneralUserGS_sf2_file // broken
    // 0301_JCLive_sf2_file // broken
    // 0301_LesPaul_sf2 // missing
    // 0301_LesPaul_sf2_file // + 1 oct?
    '0302_Aspirin_sf2_file',
    // 0302_GeneralUserGS_sf2_file // not a guitar..
    //0302_JCLive_sf2_file // broken...
    // 0303_Aspirin_sf2_file // guitar harmonic??
    '0304_Aspirin_sf2_file',
  ],
  gm_guitar_harmonics: [
    // Guitar Harmonics: Guitar
    '0310_Aspirin_sf2_file',
    '0310_FluidR3_GM_sf2_file',
    '0310_Chaos_sf2_file',
    //0310_GeneralUserGS_sf2_file // weird..
    // 0310_JCLive_sf2_file // weird
    //0310_LesPaul_sf2 // missing
    //0310_LesPaul_sf2_file // wrong pitches
    //0310_SBAWE32_sf2_file // wrong pitches
    //0310_SBLive_sf2
    //0310_SoundBlasterOld_sf2
    //0311_FluidR3_GM_sf2_file // knackt
    //0311_GeneralUserGS_sf2_file // wrong note
  ],
  gm_acoustic_bass: [
    // Acoustic Bass: Bass
    '0320_JCLive_sf2_file',
    '0320_FluidR3_GM_sf2_file',
    '0320_Aspirin_sf2_file',
    '0320_Chaos_sf2_file',
    // 0320_GeneralUserGS_sf2_file // missing notes
    //0320_SBLive_sf2
    //0320_SoundBlasterOld_sf2
    // 0321_GeneralUserGS_sf2_file // nice sound but missing notes
    // 0322_GeneralUserGS_sf2_file // missing note
  ],
  gm_electric_bass_finger: [
    // Electric Bass (finger): Bass
    '0330_JCLive_sf2_file',
    '0330_FluidR3_GM_sf2_fible',
    '0330_Aspirin_sf2_file',
    //0330_Chaos_sf2_file // same as last
    '0330_GeneralUserGS_sf2_file',
    //0330_SBLive_sf2
    //0330_SoundBlasterOld_sf2
    //0331_GeneralUserGS_sf2_file // knackt
    // 0332_GeneralUserGS_sf2_file // missin
  ],
  gm_electric_bass_pick: [
    // Electric Bass (pick): Bass
    '0340_JCLive_sf2_file',
    '0340_FluidR3_GM_sf2_file',
    '0340_Aspirin_sf2_file',
    //0340_Chaos_sf2_file // same as last
    '0340_GeneralUserGS_sf2_file',
    //0340_SBLive_sf2
    //0340_SoundBlasterOld_sf2
    '0341_Aspirin_sf2_file',
    //0341_GeneralUserGS_sf2_file // knack
  ],
  gm_fretless_bass: [
    // Fretless Bass: Bass
    '0350_Aspirin_sf2_file',
    // 0350_Chaos_sf2_file // same as last
    //0350_FluidR3_GM_sf2_file // knackt
    //0350_GeneralUserGS_sf2_file // _1 oct + knackt
    '0350_JCLive_sf2_file',
    //0350_SBLive_sf2
    //0350_SoundBlasterOld_sf2
    //0351_GeneralUserGS_sf2_file // missin
  ],
  gm_slap_bass_1: [
    // Slap Bass 1: Bass
    '0360_Aspirin_sf2_file',
    '0360_JCLive_sf2_file',
    '0360_FluidR3_GM_sf2_file',
    '0360_Chaos_sf2_file',
    //0360_GeneralUserGS_sf2_file // _1 oct
    //0360_SBLive_sf2
    //0360_SoundBlasterOld_sf2
    //0361_GeneralUserGS_sf2_file // missin
  ],
  gm_slap_bass_2: [
    // Slap Bass 2: Bass
    '0370_Aspirin_sf2_file',
    // 0370_Chaos_sf2_file // same as last
    '0370_FluidR3_GM_sf2_file',
    '0370_GeneralUserGS_sf2_fil e',
    '0370_JCLive_sf2_file',
    //0370_SBLive_sf2
    //0370_SoundBlasterOld_sf2
    //0371_GeneralUserGS_sf2_file // missing
    //0372_GeneralUserGS_sf2_file // detuned
    //0385_GeneralUserGS_sf2_file // missin
  ],
  gm_synth_bass_1: [
    // Synth Bass 1: Bass
    // '0380_Aspirin_sf2_file', // broken in safari https://codeberg.org/uzu/strudel/issues/1384
    '0380_Chaos_sf2_file',
    '0380_FluidR3_GM_sf2_file',
    // 0380_GeneralUserGS_sf2_file // laut
    '0380_JCLive_sf2_file',
    //0380_SBLive_sf2
    //0380_SoundBlasterOld_sf2
    '0381_FluidR3_GM_sf2_file',
    '0381_GeneralUserGS_sf2_file',
    //0382_FluidR3_GM_sf2_file // kein synth bass
    '0382_GeneralUserGS_sf2_file',
    '0383_GeneralUserGS_sf2_file',
    '0384_GeneralUserGS_sf2_file',
    //0386_GeneralUserGS_sf2_file // knackt
    '0387_GeneralUserGS_sf2_file',
  ],
  gm_synth_bass_2: [
    // Synth Bass 2: Bass
    '0390_Aspirin_sf2_file',
    // 0390_Chaos_sf2_file // same as last
    '0390_FluidR3_GM_sf2_file',
    '0390_GeneralUserGS_sf2_file',
    '0390_JCLive_sf2_file',
    //0390_SBLive_sf2
    //0390_SoundBlasterOld_sf2
    '0391_FluidR3_GM_sf2_file',
    // 0391_GeneralUserGS_sf2_file // missing
    //0391_SoundBlasterOld_sf2
    '0392_FluidR3_GM_sf2_file',
    //0392_GeneralUserGS_sf2_file // kein synth und _1oct
    '0393_GeneralUserGS_sf2_file',
  ],
  gm_violin: [
    // Violin: Strings
    '0400_Aspirin_sf2_file',
    '0400_Chaos_sf2_file',
    '0400_JCLive_sf2_file',
    '0400_FluidR3_GM_sf2_file',
    '0400_GeneralUserGS_sf2_file',
    //0400_SBLive_sf2
    //0400_SoundBlasterOld_sf2
    '0401_Aspirin_sf2_file',
    '0401_FluidR3_GM_sf2_file',
    '0401_GeneralUserGS_sf2_file',
    '0402_GeneralUserGS_sf2_file',
  ],
  gm_viola: [
    // Viola: Strings
    '0410_Aspirin_sf2_file',
    // 0410_Chaos_sf2_file // laut und sehr unstringy
    '0410_FluidR3_GM_sf2_file',
    '0410_GeneralUserGS_sf2_file',
    '0410_JCLive_sf2_file',
    //0410_SBLive_sf2
    //0410_SoundBlasterOld_sf2
    '0411_FluidR3_GM_sf2_file',
  ],
  gm_cello: [
    // Cello: Strings
    '0420_Aspirin_sf2_file',
    // 0420_Chaos_sf2_file // kein cello und laut
    '0420_FluidR3_GM_sf2_file',
    '0420_GeneralUserGS_sf2_file',
    '0420_JCLive_sf2_file',
    //0420_SBLive_sf2
    //0420_SoundBlasterOld_sf2
    '0421_FluidR3_GM_sf2_file',
    '0421_GeneralUserGS_sf2_file',
  ],
  gm_contrabass: [
    // Contrabass: Strings
    '0430_Aspirin_sf2_file',
    '0430_Chaos_sf2_file',
    // 0430_FluidR3_GM_sf2_file // missing notes
    '0430_GeneralUserGS_sf2_file',
    //0430_JCLive_sf2_file // _1 oct und meh
    //0430_SBLive_sf2
    //0430_SoundBlasterOld_sf2
    // 0431_FluidR3_GM_sf2_file // missing note
  ],
  gm_tremolo_strings: [
    // Tremolo Strings: Strings
    '0440_Aspirin_sf2_file',
    '0440_Chaos_sf2_file',
    //0440_FluidR3_GM_sf2_file // huuuge
    '0440_GeneralUserGS_sf2_file',
    '0440_JCLive_sf2_file',
    //0440_SBLive_sf2
    //0440_SoundBlasterOld_sf2
    '0441_GeneralUserGS_sf2_file',
    '0442_GeneralUserGS_sf2_file',
  ],
  gm_pizzicato_strings: [
    // Pizzicato Strings: Strings
    '0450_Aspirin_sf2_file',
    '0450_Chaos_sf2_file',
    '0450_FluidR3_GM_sf2_file',
    '0450_GeneralUserGS_sf2_file',
    '0450_JCLive_sf2_file',
    //0450_SBLive_sf2
    //0450_SoundBlasterOld_sf2
    '0451_FluidR3_GM_sf2_file',
  ],
  gm_orchestral_harp: [
    // Orchestral Harp: Strings
    '0460_Aspirin_sf2_file',
    // 0460_Chaos_sf2_file // knackt
    '0460_FluidR3_GM_sf2_file',
    '0460_GeneralUserGS_sf2_file',
    '0460_JCLive_sf2_file',
    //0460_SBLive_sf2
    //0460_SoundBlasterOld_sf2
    '0461_FluidR3_GM_sf2_file',
  ],
  gm_timpani: [
    // Timpani: Strings
    '0470_Aspirin_sf2_file',
    '0470_Chaos_sf2_file',
    '0470_FluidR3_GM_sf2_file',
    '0470_GeneralUserGS_sf2_file',
    // 0470_JCLive_sf2_file // wrong pitches
    //0470_SBLive_sf2
    //0470_SoundBlasterOld_sf2
    '0471_FluidR3_GM_sf2_file',
    '0471_GeneralUserGS_sf2_file',
  ],
  gm_string_ensemble_1: [
    // String Ensemble 1: Ensemble
    '0480_Aspirin_sf2_file',
    '0480_Chaos_sf2_file',
    '0480_FluidR3_GM_sf2_file',
    '0480_GeneralUserGS_sf2_file',
    '0480_JCLive_sf2_file',
    //0480_SBLive_sf2
    //0480_SoundBlasterOld_sf2
    // these dont work..
    //04810_GeneralUserGS_sf2_file // missing notes + brass
    //04811_GeneralUserGS_sf2_file  // missing notes + brass
    //04812_GeneralUserGS_sf2_file
    //04813_GeneralUserGS_sf2_file
    //04814_GeneralUserGS_sf2_file
    //04815_GeneralUserGS_sf2_file
    //04816_GeneralUserGS_sf2_file
    //04817_GeneralUserGS_sf2_file
    '0481_Aspirin_sf2_file',
    '0481_FluidR3_GM_sf2_file',
    '0481_GeneralUserGS_sf2_file',
    '0482_Aspirin_sf2_file',
    '0482_GeneralUserGS_sf2_file',
    '0483_GeneralUserGS_sf2_file',
    // another block of buggyness:
    //0484_GeneralUserGS_sf2_file // keys?! + knackt
    //0485_GeneralUserGS_sf2_file // missing notes
    //0486_GeneralUserGS_sf2_file
    //0487_GeneralUserGS_sf2_file
    //0488_GeneralUserGS_sf2_file
    //0489_GeneralUserGS_sf2_fil
  ],
  gm_string_ensemble_2: [
    // String Ensemble 2: Ensemble
    '0490_Aspirin_sf2_file',
    '0490_Chaos_sf2_file',
    '0490_FluidR3_GM_sf2_file',
    '0490_GeneralUserGS_sf2_file',
    '0490_JCLive_sf2_file',
    //0490_SBLive_sf2
    //0490_SoundBlasterOld_sf2
    '0491_GeneralUserGS_sf2_file',
    '0492_GeneralUserGS_sf2_file',
  ],
  gm_synth_strings_1: [
    // Synth Strings 1: Ensemble
    '0500_Aspirin_sf2_file',
    // 0500_Chaos_sf2_file // same as above
    //0500_FluidR3_GM_sf2_file // detune + knack
    '0500_GeneralUserGS_sf2_file',
    '0500_JCLive_sf2_file',
    //0500_SBLive_sf2
    //0500_SoundBlasterOld_sf2
    '0501_FluidR3_GM_sf2_file',
    // 0501_GeneralUserGS_sf2_file // crackles
    // 0502_FluidR3_GM_sf2_file // missing
    '0502_GeneralUserGS_sf2_file',
    '0503_FluidR3_GM_sf2_file',
    // 0504_FluidR3_GM_sf2_file // missing
    '0505_FluidR3_GM_sf2_file',
  ],
  gm_synth_strings_2: [
    // Synth Strings 2: Ensemble
    '0510_Aspirin_sf2_file',
    '0510_Chaos_sf2_file',
    // 0510_FluidR3_GM_sf2_file // detune + crackle
    '0510_GeneralUserGS_sf2_file',
    //0510_JCLive_sf2_file // laarge and meh
    //0510_SBLive_sf2 // missing
    //0510_SoundBlasterOld_sf2
    '0511_GeneralUserGS_sf2_file',
    //0511_SoundBlasterOld_sf
  ],
  gm_choir_aahs: [
    // Choir Aahs: Ensemble
    '0520_Aspirin_sf2_file',
    '0520_Chaos_sf2_file',
    '0520_FluidR3_GM_sf2_file',
    '0520_GeneralUserGS_sf2_file',
    '0520_JCLive_sf2_file',
    //0520_SBLive_sf2
    '0520_Soul_Ahhs_sf2_file',
    //0520_SoundBlasterOld_sf2
    '0521_FluidR3_GM_sf2_file',
    '0521_Soul_Ahhs_sf2_file',
    //0521_SoundBlasterOld_sf2
    '0522_Soul_Ahhs_sf2_file',
  ],
  gm_voice_oohs: [
    // Voice Oohs: Ensemble
    '0530_Aspirin_sf2_file',
    '0530_Chaos_sf2_file',
    '0530_FluidR3_GM_sf2_file',
    '0530_GeneralUserGS_sf2_file',
    //0530_JCLive_sf2_file // same as above
    //0530_SBLive_sf2
    // 0530_Soul_Ahhs_sf2_file // not ooh
    //0530_SoundBlasterOld_sf2
    '0531_FluidR3_GM_sf2_file',
    // 0531_GeneralUserGS_sf2_file // ends crackle
    '0531_JCLive_sf2_file',
    //0531_SoundBlasterOld_sf
  ],
  gm_synth_choir: [
    // Synth Choir: Ensemble
    '0540_Aspirin_sf2_file',
    '0540_Chaos_sf2_file',
    '0540_FluidR3_GM_sf2_file',
    '0540_GeneralUserGS_sf2_file',
    //0540_JCLive_sf2_file // large + crackles
    //0540_SBLive_sf2
    //0540_SoundBlasterOld_sf2
    '0541_FluidR3_GM_sf2_file',
  ],
  gm_orchestra_hit: [
    // Orchestra Hit: Ensemble
    '0550_Aspirin_sf2_file',
    '0550_Chaos_sf2_file',
    '0550_FluidR3_GM_sf2_file',
    '0550_GeneralUserGS_sf2_file',
    //0550_JCLive_sf2_file // same as above
    //0550_SBLive_sf2
    //0550_SoundBlasterOld_sf2
    //0551_Aspirin_sf2_file // not an orch hit..
    '0551_FluidR3_GM_sf2_file',
  ],
  gm_trumpet: [
    // Trumpet: Brass
    '0560_FluidR3_GM_sf2_file',
    '0560_JCLive_sf2_file',
    '0560_Aspirin_sf2_file',
    '0560_Chaos_sf2_file',
    //0560_GeneralUserGS_sf2_file // _1 oct
    //0560_SBLive_sf2
    //0560_SoundBlasterOld_sf
  ],
  gm_trombone: [
    // Trombone: Brass
    '0570_Aspirin_sf2_file',
    '0570_Chaos_sf2_file',
    '0570_FluidR3_GM_sf2_file',
    '0570_GeneralUserGS_sf2_file',
    //0570_JCLive_sf2_file // _1oct
    //0570_SBLive_sf2
    //0570_SoundBlasterOld_sf2
    '0571_GeneralUserGS_sf2_file',
  ],
  gm_tuba: [
    // Tuba: Brass
    '0580_FluidR3_GM_sf2_file',
    '0580_Aspirin_sf2_file',
    '0580_Chaos_sf2_file',
    '0580_GeneralUserGS_sf2_file',
    //0580_JCLive_sf2_file // _1oct
    //0580_SBLive_sf2
    //0580_SoundBlasterOld_sf2
    //0581_GeneralUserGS_sf2_file // missin
  ],
  gm_muted_trumpet: [
    // Muted Trumpet: Brass
    '0590_JCLive_sf2_file',
    '0590_Aspirin_sf2_file',
    '0590_Chaos_sf2_file',
    '0590_FluidR3_GM_sf2_file',
    '0590_GeneralUserGS_sf2_file',
    //0590_SBLive_sf2
    //0590_SoundBlasterOld_sf2
    // 0591_GeneralUserGS_sf2_file // missin
  ],
  gm_french_horn: [
    // French Horn: Brass
    '0600_Aspirin_sf2_file',
    //0600_Chaos_sf2_file // weird jumps
    '0600_FluidR3_GM_sf2_file',
    '0600_GeneralUserGS_sf2_file',
    '0600_JCLive_sf2_file',
    //0600_SBLive_sf2
    //0600_SoundBlasterOld_sf2
    '0601_FluidR3_GM_sf2_file',
    //0601_GeneralUserGS_sf2_file // tiny crackles
    // 0602_GeneralUserGS_sf2_file // bad gain diffs
    // 0603_GeneralUserGS_sf2_file // tiny crackle
  ],
  gm_brass_section: [
    // Brass Section: Brass
    '0610_JCLive_sf2_file',
    '0610_Aspirin_sf2_file',
    '0610_Chaos_sf2_file',
    '0610_FluidR3_GM_sf2_file',
    '0610_GeneralUserGS_sf2_file',
    //0610_SBLive_sf2
    //0610_SoundBlasterOld_sf2
    // 0611_GeneralUserGS_sf2_file // missing sounds
    // 0612_GeneralUserGS_sf2_file
    //0613_GeneralUserGS_sf2_file // _1 oct
    // 0614_GeneralUserGS_sf2_file // missing sounds
    // 0615_GeneralUserGS_sf2_file // missing sound
  ],
  gm_synth_brass_1: [
    // Synth Brass 1: Brass
    '0620_Aspirin_sf2_file',
    //0620_Chaos_sf2_file // weird gain diff
    '0620_FluidR3_GM_sf2_file',
    //0620_GeneralUserGS_sf2_file // loooud
    // 0620_JCLive_sf2_file // weird gain diff
    //0620_SBLive_sf2
    //0620_SoundBlasterOld_sf2
    '0621_Aspirin_sf2_file',
    '0621_FluidR3_GM_sf2_file',
    // 0621_GeneralUserGS_sf2_file // detune + loooud
    //0622_FluidR3_GM_sf2_file // loud..
    //0622_GeneralUserGS_sf2_file // loud + crackle
  ],
  gm_synth_brass_2: [
    // Synth Brass 2: Brass
    '0630_Aspirin_sf2_file',
    '0630_Chaos_sf2_file',
    '0630_FluidR3_GM_sf2_file',
    //0630_GeneralUserGS_sf2_file // detune + looud
    '0630_JCLive_sf2_file',
    //0630_SBLive_sf2
    //0630_SoundBlasterOld_sf2
    // 0631_Aspirin_sf2_file // looud + detune + gain diffs
    '0631_FluidR3_GM_sf2_file',
    //0631_GeneralUserGS_sf2_file // crackles
    '0632_FluidR3_GM_sf2_file',
    '0633_FluidR3_GM_sf2_file',
  ],
  gm_soprano_sax: [
    // Soprano Sax: Reed
    '0640_JCLive_sf2_file',
    '0640_Aspirin_sf2_file',
    '0640_Chaos_sf2_file',
    '0640_FluidR3_GM_sf2_file',
    // 0640_GeneralUserGS_sf2_file // crackles
    //0640_SBLive_sf2
    //0640_SoundBlasterOld_sf2
    '0641_FluidR3_GM_sf2_file',
  ],
  gm_alto_sax: [
    // Alto Sax: Reed
    //0650_Aspirin_sf2_file // this is not an alto sax
    '0650_JCLive_sf2_file',
    '0650_Chaos_sf2_file',
    '0650_FluidR3_GM_sf2_file',
    '0650_GeneralUserGS_sf2_file',
    //0650_SBLive_sf2
    //0650_SoundBlasterOld_sf2
    '0651_Aspirin_sf2_file',
    '0651_FluidR3_GM_sf2_file',
  ],
  gm_tenor_sax: [
    // Tenor Sax: Reed
    '0660_JCLive_sf2_file',
    '0660_Aspirin_sf2_file',
    '0660_Chaos_sf2_file',
    //0660_FluidR3_GM_sf2_file // weird pitches
    '0660_GeneralUserGS_sf2_file',
    //0660_SBLive_sf2
    //0660_SoundBlasterOld_sf2
    // 0661_FluidR3_GM_sf2_file // weird pitches
    // 0661_GeneralUserGS_sf2_file // missin
  ],
  gm_baritone_sax: [
    // Baritone Sax: Reed
    '0670_JCLive_sf2_file',
    '0670_Aspirin_sf2_file',
    '0670_Chaos_sf2_file',
    '0670_FluidR3_GM_sf2_file',
    '0670_GeneralUserGS_sf2_file',
    //0670_SBLive_sf2
    //0670_SoundBlasterOld_sf2
    '0671_FluidR3_GM_sf2_file',
  ],
  gm_oboe: [
    // Oboe: Reed
    //0680_Aspirin_sf2_file // tiny crackles
    '0680_JCLive_sf2_file',
    '0680_Chaos_sf2_file',
    '0680_FluidR3_GM_sf2_file',
    '0680_GeneralUserGS_sf2_file',
    //0680_SBLive_sf2
    //0680_SoundBlasterOld_sf2
    '0681_FluidR3_GM_sf2_file',
  ],
  gm_english_horn: [
    // English Horn: Reed
    '0690_JCLive_sf2_file',
    '0690_Aspirin_sf2_file',
    //0690_Chaos_sf2_file // detuned
    '0690_FluidR3_GM_sf2_file',
    //0690_GeneralUserGS_sf2_file // +1 oct
    //0690_SBLive_sf2
    //0690_SoundBlasterOld_sf2
    '0691_FluidR3_GM_sf2_file',
  ],
  gm_bassoon: [
    // Bassoon: Reed
    '0700_JCLive_sf2_file',
    //0700_Aspirin_sf2_file // detune + gain diffs
    // 0700_Chaos_sf2_file // detune + crackles
    '0700_FluidR3_GM_sf2_file',
    '0700_GeneralUserGS_sf2_file',
    //0700_SBLive_sf2
    //0700_SoundBlasterOld_sf2
    '0701_FluidR3_GM_sf2_file',
    //0701_GeneralUserGS_sf2_file // missin
  ],
  gm_clarinet: [
    // Clarinet: Reed
    '0710_JCLive_sf2_file',
    '0710_Aspirin_sf2_file',
    '0710_Chaos_sf2_file',
    '0710_FluidR3_GM_sf2_file',
    '0710_GeneralUserGS_sf2_file',
    //0710_SBLive_sf2
    //0710_SoundBlasterOld_sf2
    '0711_FluidR3_GM_sf2_file',
  ],
  gm_piccolo: [
    // Piccolo: Pipe
    '0720_JCLive_sf2_file',
    '0720_Aspirin_sf2_file',
    // 0720_Chaos_sf2_file // not a piccolo
    '0720_FluidR3_GM_sf2_file',
    '0720_GeneralUserGS_sf2_file',
    //0720_SBLive_sf2
    //0720_SoundBlasterOld_sf2
    '0721_FluidR3_GM_sf2_file',
    //0721_SoundBlasterOld_sf
  ],
  gm_flute: [
    // Flute: Pipe
    '0730_JCLive_sf2_file',
    '0730_Aspirin_sf2_file',
    //0730_Chaos_sf2_file // etune
    '0730_FluidR3_GM_sf2_file',
    '0730_GeneralUserGS_sf2_file',
    //0730_SBLive_sf2
    //0730_SoundBlasterOld_sf2
    //0731_Aspirin_sf2_file // not a flute
    '0731_FluidR3_GM_sf2_file',
    //0731_SoundBlasterOld_sf
  ],
  gm_recorder: [
    // Recorder: Pipe
    '0740_JCLive_sf2_file',
    '0740_Aspirin_sf2_file',
    '0740_Chaos_sf2_file',
    '0740_FluidR3_GM_sf2_file',
    '0740_GeneralUserGS_sf2_file',
    //0740_SBLive_sf2
    //0740_SoundBlasterOld_sf2
    // 0741_GeneralUserGS_sf2_file // missin
  ],
  gm_pan_flute: [
    // Pan Flute: Pipe
    '0750_JCLive_sf2_file',
    '0750_FluidR3_GM_sf2_file',
    '0750_Aspirin_sf2_file',
    '0750_Chaos_sf2_file',
    '0750_GeneralUserGS_sf2_file',
    //0750_SBLive_sf2
    //0750_SoundBlasterOld_sf2
    '0751_Aspirin_sf2_file',
    '0751_FluidR3_GM_sf2_file',
    '0751_GeneralUserGS_sf2_file',
    //0751_SoundBlasterOld_sf
  ],
  gm_blown_bottle: [
    // Blown bottle: Pipe
    '0760_FluidR3_GM_sf2_file',
    '0760_JCLive_sf2_file',
    // 0760_Aspirin_sf2_file // same as below w crackle
    '0760_Chaos_sf2_file',
    '0760_GeneralUserGS_sf2_file',
    //0760_SBLive_sf2
    //0760_SoundBlasterOld_sf2
    '0761_FluidR3_GM_sf2_file',
    // 0761_GeneralUserGS_sf2_file // missing
    //0761_SoundBlasterOld_sf2
    // 0762_GeneralUserGS_sf2_file // missin
  ],
  gm_shakuhachi: [
    // Shakuhachi: Pipe
    '0770_JCLive_sf2_file',
    '0771_FluidR3_GM_sf2_file',
    '0770_Aspirin_sf2_file',
    //0770_Chaos_sf2_file // not shakuhachi
    '0770_FluidR3_GM_sf2_file',
    '0770_GeneralUserGS_sf2_file',
    //0770_SBLive_sf2
    //0770_SoundBlasterOld_sf2
    // 0771_GeneralUserGS_sf2_file // missing
    // 0772_GeneralUserGS_sf2_file // missin
  ],
  gm_whistle: [
    // Whistle: Pipe
    '0780_FluidR3_GM_sf2_file',
    '0780_JCLive_sf2_file',
    '0780_Aspirin_sf2_file',
    '0780_Chaos_sf2_file',
    //0780_GeneralUserGS_sf2_file // loud..
    //0780_SBLive_sf2
    //0780_SoundBlasterOld_sf2
    // 0781_GeneralUserGS_sf2_file // detune + crackle
  ],
  gm_ocarina: [
    // Ocarina: Pipe
    '0790_FluidR3_GM_sf2_file',
    '0790_JCLive_sf2_file',
    '0790_Aspirin_sf2_file',
    //0790_Chaos_sf2_file // same as above
    '0790_GeneralUserGS_sf2_file',
    //0790_SBLive_sf2
    //0790_SoundBlasterOld_sf2
    //0791_GeneralUserGS_sf2_file // missin
  ],
  gm_lead_1_square: [
    // Lead 1 (square): Synth Lead
    '0800_Aspirin_sf2_file',
    '0800_Chaos_sf2_file',
    '0800_FluidR3_GM_sf2_file',
    // 0800_GeneralUserGS_sf2_file // detuned
    // 0800_JCLive_sf2_file // detuned
    //0800_SBLive_sf2
    //0800_SoundBlasterOld_sf2
    //0801_FluidR3_GM_sf2_file // detune
    // 0801_GeneralUserGS_sf2_file // detun
  ],
  gm_lead_2_sawtooth: [
    // Lead 2 (sawtooth): Synth Lead
    '0810_JCLive_sf2_file',
    '0810_Aspirin_sf2_file',
    '0810_Chaos_sf2_file',
    '0810_FluidR3_GM_sf2_file',
    '0810_GeneralUserGS_sf2_file',
    //0810_SBLive_sf2
    //0810_SoundBlasterOld_sf2
    '0811_Aspirin_sf2_file',
    '0811_GeneralUserGS_sf2_file',
    //0811_SoundBlasterOld_sf
  ],
  gm_lead_3_calliope: [
    // Lead 3 (calliope): Synth Lead
    '0820_JCLive_sf2_file',
    '0820_Aspirin_sf2_file',
    '0820_Chaos_sf2_file',
    '0820_FluidR3_GM_sf2_file',
    '0820_GeneralUserGS_sf2_file',
    //0820_SBLive_sf2
    //0820_SoundBlasterOld_sf2
    '0821_FluidR3_GM_sf2_file',
    '0821_GeneralUserGS_sf2_file',
    //0821_SoundBlasterOld_sf2
    // 0822_GeneralUserGS_sf2_file // missing
    //0823_GeneralUserGS_sf2_file // missin
  ],
  gm_lead_4_chiff: [
    // Lead 4 (chiff): Synth Lead
    '0830_JCLive_sf2_file',
    '0830_Aspirin_sf2_file',
    // 0830_Chaos_sf2_file // same as above
    '0830_FluidR3_GM_sf2_file',
    '0830_GeneralUserGS_sf2_file',
    //0830_SBLive_sf2
    //0830_SoundBlasterOld_sf2
    '0831_FluidR3_GM_sf2_file',
    '0831_GeneralUserGS_sf2_file',
    //0831_SoundBlasterOld_sf
  ],
  gm_lead_5_charang: [
    // Lead 5 (charang): Synth Lead
    '0840_JCLive_sf2_file',
    '0840_FluidR3_GM_sf2_file',
    '0840_Aspirin_sf2_file',
    '0840_Chaos_sf2_file',
    '0840_GeneralUserGS_sf2_file',
    //0840_SBLive_sf2
    //0840_SoundBlasterOld_sf2
    '0841_Aspirin_sf2_file',
    '0841_Chaos_sf2_file',
    '0841_FluidR3_GM_sf2_file',
    '0841_GeneralUserGS_sf2_file',
    //0841_JCLive_sf2_file // +1oct + detune
    //0841_SoundBlasterOld_sf2
    '0842_FluidR3_GM_sf2_file',
  ],
  gm_lead_6_voice: [
    // Lead 6 (voice): Synth Lead
    '0850_JCLive_sf2_file',
    '0850_Aspirin_sf2_file',
    // 0850_Chaos_sf2_file // same as above
    '0850_FluidR3_GM_sf2_file',
    // 0850_GeneralUserGS_sf2_file // no voice
    //0850_SBLive_sf2
    //0850_SoundBlasterOld_sf2
    '0851_FluidR3_GM_sf2_file',
    '0851_GeneralUserGS_sf2_file',
    '0851_JCLive_sf2_file',
    //0851_SoundBlasterOld_sf
  ],
  gm_lead_7_fifths: [
    // Lead 7 (fifths): Synth Lead
    '0860_JCLive_sf2_file',
    '0860_Aspirin_sf2_file',
    '0860_Chaos_sf2_file',
    // 0860_FluidR3_GM_sf2_file // loud and not fitting
    '0860_GeneralUserGS_sf2_file',
    //0860_SBLive_sf2
    //0860_SoundBlasterOld_sf2
    '0861_Aspirin_sf2_file',
    // 0861_FluidR3_GM_sf2_file // lout and not fitting
    //0861_SoundBlasterOld_sf
  ],
  gm_lead_8_bass_lead: [
    // Lead 8 (bass + lead): Synth Lead
    '0870_JCLive_sf2_file',
    '0870_Aspirin_sf2_file',
    '0870_Chaos_sf2_file',
    '0870_FluidR3_GM_sf2_file',
    '0870_GeneralUserGS_sf2_file',
    //0870_SBLive_sf2
    //0870_SoundBlasterOld_sf2
    // 0871_GeneralUserGS_sf2_file // loud + detune
    //0872_GeneralUserGS_sf2_file // loud
    //0873_GeneralUserGS_sf2_file // lou
  ],
  gm_pad_new_age: [
    // Pad 1 (new age): Synth Pad
    '0880_JCLive_sf2_file',
    '0880_Aspirin_sf2_file',
    '0880_Chaos_sf2_file',
    '0880_FluidR3_GM_sf2_file',
    '0880_GeneralUserGS_sf2_file',
    //0880_SBLive_sf2
    //0880_SoundBlasterOld_sf2
    '0881_Aspirin_sf2_file',
    '0881_FluidR3_GM_sf2_file',
    '0881_GeneralUserGS_sf2_file',
    //0881_SoundBlasterOld_sf2
    '0882_Aspirin_sf2_file',
    // 0882_FluidR3_GM_sf2_file // missing
    '0882_GeneralUserGS_sf2_file',
    //0883_GeneralUserGS_sf2_file // missing
    // 0884_GeneralUserGS_sf2_file // broken
    '0885_GeneralUserGS_sf2_file',
    //0886_GeneralUserGS_sf2_file // not a pad
    '0887_GeneralUserGS_sf2_file',
    //0888_GeneralUserGS_sf2_file // not a pad
    //0889_GeneralUserGS_sf2_file // not a pa
  ],
  gm_pad_warm: [
    // Pad 2 (warm): Synth Pad
    '0890_JCLive_sf2_file',
    '0890_Aspirin_sf2_file',
    '0890_Chaos_sf2_file',
    '0890_FluidR3_GM_sf2_file',
    '0890_GeneralUserGS_sf2_file',
    //0890_SBLive_sf2
    //0890_SoundBlasterOld_sf2
    '0891_Aspirin_sf2_file',
    '0891_FluidR3_GM_sf2_file',
    // 0891_GeneralUserGS_sf2_file // nois
  ],
  gm_pad_poly: [
    // Pad 3 (polysynth): Synth Pad
    //0900_Aspirin_sf2_file // same as belo
    '0900_JCLive_sf2_file',
    '0900_Chaos_sf2_file',
    '0900_FluidR3_GM_sf2_file',
    '0900_GeneralUserGS_sf2_file',
    //0900_SBLive_sf2
    //0900_SoundBlasterOld_sf2
    '0901_Aspirin_sf2_file',
    '0901_FluidR3_GM_sf2_file',
    '0901_GeneralUserGS_sf2_file',
    //0901_SoundBlasterOld_sf
  ],
  gm_pad_choir: [
    // Pad 4 (choir): Synth Pad
    '0910_FluidR3_GM_sf2_file',
    '0910_JCLive_sf2_file',
    '0910_Aspirin_sf2_file',
    //0910_Chaos_sf2_file // +1oct
    '0910_GeneralUserGS_sf2_file',
    //0910_SBLive_sf2
    //0910_SoundBlasterOld_sf2
    // 0911_Aspirin_sf2_file // fluty crackles
    '0911_GeneralUserGS_sf2_file',
    '0911_JCLive_sf2_file',
    //0911_SoundBlasterOld_sf
  ],
  gm_pad_bowed: [
    // Pad 5 (bowed): Synth Pad
    '0920_JCLive_sf2_file',
    '0920_Aspirin_sf2_file',
    //0920_Chaos_sf2_file // same as above
    //0920_FluidR3_GM_sf2_file // detuned?
    '0920_GeneralUserGS_sf2_file',
    //0920_SBLive_sf2
    //0920_SoundBlasterOld_sf2
    '0921_Aspirin_sf2_file',
    '0921_GeneralUserGS_sf2_file',
    //0921_SoundBlasterOld_sf
  ],
  gm_pad_metallic: [
    // Pad 6 (metallic): Synth Pad
    '0930_Aspirin_sf2_file',
    '0930_Chaos_sf2_file',
    '0930_FluidR3_GM_sf2_file',
    '0930_GeneralUserGS_sf2_file',
    // 0930_JCLive_sf2_file // buggy zones: guitar / synth
    //0930_SBLive_sf2
    //0930_SoundBlasterOld_sf2
    '0931_Aspirin_sf2_file',
    '0931_FluidR3_GM_sf2_file',
    '0931_GeneralUserGS_sf2_file',
    //0931_SoundBlasterOld_sf
  ],
  gm_pad_halo: [
    // Pad 7 (halo): Synth Pad
    // 0940_Aspirin_sf2_file // same as below
    '0940_Chaos_sf2_file',
    '0940_FluidR3_GM_sf2_file',
    '0940_GeneralUserGS_sf2_file',
    '0940_JCLive_sf2_file',
    //0940_SBLive_sf2
    //0940_SoundBlasterOld_sf2
    '0941_Aspirin_sf2_file',
    '0941_FluidR3_GM_sf2_file',
    '0941_GeneralUserGS_sf2_file',
    '0941_JCLive_sf2_file',
  ],
  gm_pad_sweep: [
    // Pad 8 (sweep): Synth Pad
    '0950_Aspirin_sf2_file',
    '0950_Chaos_sf2_file',
    '0950_FluidR3_GM_sf2_file',
    '0950_GeneralUserGS_sf2_file',
    '0950_JCLive_sf2_file',
    //0950_SBLive_sf2
    //0950_SoundBlasterOld_sf2
    '0951_FluidR3_GM_sf2_file',
    '0951_GeneralUserGS_sf2_file',
  ],
  gm_fx_rain: [
    // FX 1 (rain): Synth Effects
    //0960_Aspirin_sf2_file //mixed samples?
    '0960_FluidR3_GM_sf2_file',
    '0960_Chaos_sf2_file',
    '0960_GeneralUserGS_sf2_file',
    // 0960_JCLive_sf2_file // mixed samples?
    //0960_SBLive_sf2
    //0960_SoundBlasterOld_sf2
    '0961_Aspirin_sf2_file',
    '0961_FluidR3_GM_sf2_file',
    // 0961_GeneralUserGS_sf2_file // ?!?!
    //0961_SoundBlasterOld_sf2
    '0962_GeneralUserGS_sf2_file',
  ],
  gm_fx_soundtrack: [
    // FX 2 (soundtrack): Synth Effects
    '0970_FluidR3_GM_sf2_file',
    '0970_Aspirin_sf2_file',
    //0970_Chaos_sf2_file // wrong pitch
    '0970_GeneralUserGS_sf2_file',
    //0970_JCLive_sf2_file // wrong pitch
    //0970_SBLive_sf2
    //0970_SoundBlasterOld_sf2
    '0971_FluidR3_GM_sf2_file',
    '0971_GeneralUserGS_sf2_file',
    //0971_SoundBlasterOld_sf
  ],
  gm_fx_crystal: [
    // FX 3 (crystal): Synth Effects
    '0980_Aspirin_sf2_file',
    '0980_JCLive_sf2_file',
    '0980_Chaos_sf2_file',
    // 0980_FluidR3_GM_sf2_file // some notes are weird
    '0980_GeneralUserGS_sf2_file',
    '0981_FluidR3_GM_sf2_file',
    //0980_SBLive_sf2
    //0980_SoundBlasterOld_sf2
    '0981_Aspirin_sf2_file',
    '0981_GeneralUserGS_sf2_file',
    //0981_SoundBlasterOld_sf2
    '0982_GeneralUserGS_sf2_file',
    '0983_GeneralUserGS_sf2_file',
    '0984_GeneralUserGS_sf2_file',
  ],
  gm_fx_atmosphere: [
    // FX 4 (atmosphere): Synth Effects
    '0990_JCLive_sf2_file',
    '0990_Aspirin_sf2_file',
    '0990_Chaos_sf2_file',
    '0990_FluidR3_GM_sf2_file',
    '0990_GeneralUserGS_sf2_file',
    //0990_SBLive_sf2
    //0990_SoundBlasterOld_sf2
    '0991_Aspirin_sf2_file',
    '0991_FluidR3_GM_sf2_file',
    '0991_GeneralUserGS_sf2_file',
    '0991_JCLive_sf2_file',
    //0991_SoundBlasterOld_sf2
    '0992_FluidR3_GM_sf2_file',
    '0992_JCLive_sf2_file',
    '0993_JCLive_sf2_file',
    '0994_JCLive_sf2_file',
  ],
  gm_fx_brightness: [
    // FX 5 (brightness): Synth Effects
    '1000_JCLive_sf2_file',
    '1000_Aspirin_sf2_file',
    '1000_Chaos_sf2_file',
    '1000_FluidR3_GM_sf2_file',
    '1000_GeneralUserGS_sf2_file',
    //1000_SBLive_sf2
    //1000_SoundBlasterOld_sf2
    '1001_Aspirin_sf2_file',
    '1001_FluidR3_GM_sf2_file',
    '1001_GeneralUserGS_sf2_file',
    '1001_JCLive_sf2_file',
    //1001_SoundBlasterOld_sf2
    '1002_Aspirin_sf2_file',
    '1002_FluidR3_GM_sf2_file',
    '1002_GeneralUserGS_sf2_file',
  ],
  gm_fx_goblins: [
    // FX 6 (goblins): Synth Effects
    '1010_FluidR3_GM_sf2_file',
    '1010_JCLive_sf2_file',
    '1010_Aspirin_sf2_file',
    '1010_Chaos_sf2_file',
    '1010_GeneralUserGS_sf2_file',
    //1010_SBLive_sf2
    //1010_SoundBlasterOld_sf2
    '1011_Aspirin_sf2_file',
    '1011_FluidR3_GM_sf2_file',
    '1011_JCLive_sf2_file',
    '1012_Aspirin_sf2_file',
  ],
  gm_fx_echoes: [
    // FX 7 (echoes): Synth Effects
    '1020_FluidR3_GM_sf2_file',
    '1020_JCLive_sf2_file',
    '1020_Aspirin_sf2_file',
    '1020_Chaos_sf2_file',
    '1020_GeneralUserGS_sf2_file',
    //1020_SBLive_sf2
    //1020_SoundBlasterOld_sf2
    '1021_Aspirin_sf2_file',
    '1021_FluidR3_GM_sf2_file',
    '1021_GeneralUserGS_sf2_file',
    '1021_JCLive_sf2_file',
    //1021_SoundBlasterOld_sf2
    '1022_GeneralUserGS_sf2_file',
  ],
  gm_fx_sci_fi: [
    // FX 8 (sci_fi): Synth Effects
    '1030_FluidR3_GM_sf2_file',
    '1030_Aspirin_sf2_file',
    '1030_Chaos_sf2_file',
    '1030_GeneralUserGS_sf2_file',
    '1030_JCLive_sf2_file',
    //1030_SBLive_sf2
    //1030_SoundBlasterOld_sf2
    '1031_Aspirin_sf2_file',
    '1031_FluidR3_GM_sf2_file',
    '1031_GeneralUserGS_sf2_file',
    //1031_SoundBlasterOld_sf2
    '1032_FluidR3_GM_sf2_file',
  ],
  gm_sitar: [
    // Sitar: Ethnic
    '1040_Aspirin_sf2_file',
    '1040_FluidR3_GM_sf2_file',
    '1040_JCLive_sf2_file',
    '1040_Chaos_sf2_file',
    '1040_GeneralUserGS_sf2_file',
    //1040_SBLive_sf2
    //1040_SoundBlasterOld_sf2
    '1041_FluidR3_GM_sf2_file',
    '1041_GeneralUserGS_sf2_file',
  ],
  gm_banjo: [
    // Banjo: Ethnic
    '1050_FluidR3_GM_sf2_file',
    '1050_JCLive_sf2_file',
    '1050_Aspirin_sf2_file',
    '1050_Chaos_sf2_file',
    '1050_GeneralUserGS_sf2_file',
    //1050_SBLive_sf2
    //1050_SoundBlasterOld_sf2
    '1051_GeneralUserGS_sf2_file',
  ],
  gm_shamisen: [
    // Shamisen: Ethnic
    '1060_JCLive_sf2_file',
    '1060_FluidR3_GM_sf2_file',
    '1060_Aspirin_sf2_file',
    '1060_Chaos_sf2_file',
    '1060_GeneralUserGS_sf2_file',
    //1060_SBLive_sf2
    //1060_SoundBlasterOld_sf2
    '1061_FluidR3_GM_sf2_file',
    '1061_GeneralUserGS_sf2_file',
    //1061_SoundBlasterOld_sf
  ],
  gm_koto: [
    // Koto: Ethnic
    '1070_FluidR3_GM_sf2_file',
    '1070_JCLive_sf2_file',
    '1070_Aspirin_sf2_file',
    '1070_Chaos_sf2_file',
    '1070_GeneralUserGS_sf2_file',
    //1070_SBLive_sf2
    //1070_SoundBlasterOld_sf2
    '1071_FluidR3_GM_sf2_file',
    '1071_GeneralUserGS_sf2_file',
    '1072_GeneralUserGS_sf2_file',
    '1073_GeneralUserGS_sf2_file',
  ],
  gm_kalimba: [
    // Kalimba: Ethnic
    '1080_JCLive_sf2_file',
    '1080_FluidR3_GM_sf2_file',
    '1080_Aspirin_sf2_file',
    '1080_Chaos_sf2_file',
    '1080_GeneralUserGS_sf2_file',
    //1080_SBLive_sf2
    //1080_SoundBlasterOld_sf2
    //1081_SoundBlasterOld_sf
  ],
  gm_bagpipe: [
    // Bagpipe: Ethnic
    '1090_Aspirin_sf2_file',
    // '1090_Chaos_sf2_file', // broken pitches
    // '1090_GeneralUserGS_sf2_file', // broken pitches
    // '1090_FluidR3_GM_sf2_file', // broken pitches ?
    // '1090_JCLive_sf2_file', // broken pitches ?
    //1090_SBLive_sf2
    //1090_SoundBlasterOld_sf2
    //1091_SoundBlasterOld_sf
  ],
  gm_fiddle: [
    // Fiddle: Ethnic
    '1100_JCLive_sf2_file',
    '1100_Aspirin_sf2_file',
    '1100_Chaos_sf2_file',
    '1100_FluidR3_GM_sf2_file',
    '1100_GeneralUserGS_sf2_file',
    //1100_SBLive_sf2
    //1100_SoundBlasterOld_sf2
    '1101_Aspirin_sf2_file',
    '1101_FluidR3_GM_sf2_file',
    '1101_GeneralUserGS_sf2_file',
    '1102_GeneralUserGS_sf2_file',
  ],
  gm_shanai: [
    // Shanai: Ethnic
    '1110_Aspirin_sf2_file',
    '1110_FluidR3_GM_sf2_file',
    '1110_JCLive_sf2_file',
    '1110_Chaos_sf2_file',
    '1110_GeneralUserGS_sf2_file',
    //1110_SBLive_sf2
    //1110_SoundBlasterOld_sf
  ],
  gm_tinkle_bell: [
    // Tinkle Bell: Percussive
    '1120_Aspirin_sf2_file',
    // '1120_Chaos_sf2_file', // same as above
    // '1120_GeneralUserGS_sf2_file', // sounds exactly as Aspirin
    // '1120_FluidR3_GM_sf2_file', // +1oct
    // '1120_JCLive_sf2_file', // +1oct
    //1120_SBLive_sf2
    //1120_SoundBlasterOld_sf2
    //1121_SoundBlasterOld_sf
  ],
  gm_agogo: [
    // Agogo: Percussive
    '1130_JCLive_sf2_file',
    '1130_Aspirin_sf2_file',
    '1130_Chaos_sf2_file',
    '1130_FluidR3_GM_sf2_file',
    '1130_GeneralUserGS_sf2_file',
    //1130_SBLive_sf2
    //1130_SoundBlasterOld_sf2
    '1131_FluidR3_GM_sf2_file',
    //1131_SoundBlasterOld_sf
  ],
  gm_steel_drums: [
    // Steel Drums: Percussive
    '1140_FluidR3_GM_sf2_file',
    '1140_Aspirin_sf2_file',
    '1140_JCLive_sf2_file',
    '1140_Chaos_sf2_file',
    '1140_GeneralUserGS_sf2_file',
    //1140_SBLive_sf2
    //1140_SoundBlasterOld_sf2
    '1141_FluidR3_GM_sf2_file',
  ],
  gm_woodblock: [
    // Woodblock: Percussive
    '1150_JCLive_sf2_file',
    '1150_Aspirin_sf2_file',
    '1150_Chaos_sf2_file',
    '1150_FluidR3_GM_sf2_file',
    '1150_GeneralUserGS_sf2_file',
    //1150_SBLive_sf2
    //1150_SoundBlasterOld_sf2
    '1151_FluidR3_GM_sf2_file',
    '1151_GeneralUserGS_sf2_file',
    '1152_FluidR3_GM_sf2_file',
    '1152_GeneralUserGS_sf2_file',
  ],
  gm_taiko_drum: [
    // Taiko Drum: Percussive
    '1160_JCLive_sf2_file',
    '1160_FluidR3_GM_sf2_file',
    '1160_Aspirin_sf2_file',
    '1160_Chaos_sf2_file',
    '1160_GeneralUserGS_sf2_file',
    //1160_SBLive_sf2
    //1160_SoundBlasterOld_sf2
    '1161_FluidR3_GM_sf2_file',
    '1161_GeneralUserGS_sf2_file',
    //1161_SoundBlasterOld_sf2
    '1162_FluidR3_GM_sf2_file',
    '1162_GeneralUserGS_sf2_file',
    '1163_FluidR3_GM_sf2_file',
  ],
  gm_melodic_tom: [
    // Melodic Tom: Percussive
    '1170_JCLive_sf2_file',
    '1170_Aspirin_sf2_file',
    '1170_Chaos_sf2_file',
    '1170_FluidR3_GM_sf2_file',
    '1170_GeneralUserGS_sf2_file',
    //1170_SBLive_sf2
    //1170_SoundBlasterOld_sf2
    '1171_FluidR3_GM_sf2_file',
    '1171_GeneralUserGS_sf2_file',
    '1172_FluidR3_GM_sf2_file',
    '1173_FluidR3_GM_sf2_file',
  ],
  gm_synth_drum: [
    // Synth Drum: Percussive
    '1180_JCLive_sf2_file',
    '1180_Aspirin_sf2_file',
    '1180_Chaos_sf2_file',
    '1180_FluidR3_GM_sf2_file',
    '1180_GeneralUserGS_sf2_file',
    //1180_SBLive_sf2
    //1180_SoundBlasterOld_sf2
    '1181_FluidR3_GM_sf2_file',
    '1181_GeneralUserGS_sf2_file',
    //1181_SoundBlasterOld_sf
  ],
  gm_reverse_cymbal: [
    // Reverse Cymbal: Percussive
    '1190_JCLive_sf2_file',
    '1190_Aspirin_sf2_file',
    '1190_Chaos_sf2_file',
    '1190_FluidR3_GM_sf2_file',
    '1190_GeneralUserGS_sf2_file',
    //1190_SBLive_sf2
    //1190_SoundBlasterOld_sf2
    '1191_GeneralUserGS_sf2_file',
    '1192_GeneralUserGS_sf2_file',
    '1193_GeneralUserGS_sf2_file',
    '1194_GeneralUserGS_sf2_file',
  ],
  gm_guitar_fret_noise: [
    // Guitar Fret Noise: Sound effects
    '1200_JCLive_sf2_file',
    '1200_Aspirin_sf2_file',
    '1200_Chaos_sf2_file',
    '1200_FluidR3_GM_sf2_file',
    '1200_GeneralUserGS_sf2_file',
    //1200_SBLive_sf2
    //1200_SoundBlasterOld_sf2
    '1201_Aspirin_sf2_file',
    '1201_GeneralUserGS_sf2_file',
    '1202_GeneralUserGS_sf2_file',
  ],
  gm_breath_noise: [
    // Breath Noise: Sound effects
    '1210_FluidR3_GM_sf2_file',
    '1210_JCLive_sf2_file',
    '1210_Aspirin_sf2_file',
    '1210_Chaos_sf2_file',
    '1210_GeneralUserGS_sf2_file',
    //1210_SBLive_sf2
    //1210_SoundBlasterOld_sf2
    '1211_Aspirin_sf2_file',
    '1211_GeneralUserGS_sf2_file',
    '1212_GeneralUserGS_sf2_file',
  ],
  gm_seashore: [
    // Seashore: Sound effects
    '1220_JCLive_sf2_file',
    '1220_Aspirin_sf2_file',
    '1220_Chaos_sf2_file',
    '1220_FluidR3_GM_sf2_file',
    '1220_GeneralUserGS_sf2_file',
    //1220_SBLive_sf2
    //1220_SoundBlasterOld_sf2
    '1221_Aspirin_sf2_file',
    '1221_GeneralUserGS_sf2_file',
    '1221_JCLive_sf2_file',
    '1222_Aspirin_sf2_file',
    '1222_GeneralUserGS_sf2_file',
    '1223_Aspirin_sf2_file',
    '1223_GeneralUserGS_sf2_file',
    '1224_Aspirin_sf2_file',
    '1224_GeneralUserGS_sf2_file',
    '1225_GeneralUserGS_sf2_file',
    '1226_GeneralUserGS_sf2_file',
  ],
  gm_bird_tweet: [
    // Bird Tweet: Sound effects
    '1230_FluidR3_GM_sf2_file',
    '1230_JCLive_sf2_file',
    '1230_Aspirin_sf2_file',
    // '1230_Chaos_sf2_file',
    '1230_GeneralUserGS_sf2_file',
    //1230_SBLive_sf2
    //1230_SoundBlasterOld_sf2
    //'1231_Aspirin_sf2_file',
    '1231_GeneralUserGS_sf2_file', // dog
    // '1232_Aspirin_sf2_file',// ?
    '1232_GeneralUserGS_sf2_file', // horse
    // '1233_GeneralUserGS_sf2_file', //
    '1234_GeneralUserGS_sf2_file', // scratch
  ],
  gm_telephone: [
    // Telephone Ring: Sound effects
    '1240_JCLive_sf2_file',
    '1240_Aspirin_sf2_file',
    '1240_Chaos_sf2_file',
    '1240_FluidR3_GM_sf2_file',
    // '1240_GeneralUserGS_sf2_file',
    //1240_SBLive_sf2
    //1240_SoundBlasterOld_sf2
    '1241_Aspirin_sf2_file', // door?
    //'1241_GeneralUserGS_sf2_file',
    // '1242_Aspirin_sf2_file', // ?
    '1242_GeneralUserGS_sf2_file', // door
    '1243_Aspirin_sf2_file', // scratch
    '1243_GeneralUserGS_sf2_file', // door close?
    '1244_Aspirin_sf2_file', // bells
    '1244_GeneralUserGS_sf2_file', // bells
  ],
  gm_helicopter: [
    // Helicopter: Sound effects
    '1250_JCLive_sf2_file',
    '1250_Aspirin_sf2_file',
    // '1250_Chaos_sf2_file', // same as above
    '1250_FluidR3_GM_sf2_file',
    '1250_GeneralUserGS_sf2_file',
    //1250_SBLive_sf2
    //1250_SoundBlasterOld_sf2
    // '1251_Aspirin_sf2_file', // slooow
    '1251_FluidR3_GM_sf2_file', // guitar
    '1251_GeneralUserGS_sf2_file', // engine start with loop at end..
    '1252_Aspirin_sf2_file', // alien
    '1252_FluidR3_GM_sf2_file', // seashore
    '1252_GeneralUserGS_sf2_file', // carbreak
    // '1253_Aspirin_sf2_file', // plane
    '1253_GeneralUserGS_sf2_file', // racing car
    // '1254_Aspirin_sf2_file',
    '1254_GeneralUserGS_sf2_file', // breaking
    // '1255_Aspirin_sf2_file',
    '1255_GeneralUserGS_sf2_file', // siren
    // '1256_Aspirin_sf2_file',
    '1256_GeneralUserGS_sf2_file', // hmm
    // '1257_Aspirin_sf2_file',
    '1257_GeneralUserGS_sf2_file', // noise
    // '1258_Aspirin_sf2_file',
    '1258_GeneralUserGS_sf2_file', // metallic noise
    '1259_GeneralUserGS_sf2_file', // watery nosie
  ],
  gm_applause: [
    // Applause: Sound effects
    '1260_JCLive_sf2_file',
    '1260_Aspirin_sf2_file',
    '1260_Chaos_sf2_file',
    '1260_FluidR3_GM_sf2_file',
    '1260_GeneralUserGS_sf2_file',
    //1260_SBLive_sf2
    //1260_SoundBlasterOld_sf2
    '1261_Aspirin_sf2_file',
    '1261_GeneralUserGS_sf2_file',
    '1262_Aspirin_sf2_file',
    '1262_GeneralUserGS_sf2_file',
    '1263_Aspirin_sf2_file',
    '1263_GeneralUserGS_sf2_file',
    '1264_Aspirin_sf2_file',
    '1264_GeneralUserGS_sf2_file',
    '1265_Aspirin_sf2_file',
    '1265_GeneralUserGS_sf2_file',
  ],
  gm_gunshot: [
    // Gunshot: Sound effects
    '1270_JCLive_sf2_file',
    '1270_Aspirin_sf2_file',
    '1270_Chaos_sf2_file',
    '1270_FluidR3_GM_sf2_file',
    '1270_GeneralUserGS_sf2_file',
    //1270_SBLive_sf2
    //1270_SoundBlasterOld_sf2
    '1271_Aspirin_sf2_file',
    '1271_GeneralUserGS_sf2_file',
    '1272_Aspirin_sf2_file',
    '1272_GeneralUserGS_sf2_file',
    '1273_GeneralUserGS_sf2_file',
    '1274_GeneralUserGS_sf2_file',
    '',
  ],
};

let defaultSoundfontUrl = 'https://felixroos.github.io/webaudiofontdata/sound';
let soundfontUrl = defaultSoundfontUrl;

function setSoundfontUrl(value) {
  soundfontUrl = value;
}

let loadCache = {};
async function loadFont(name) {
  if (loadCache[name]) {
    return loadCache[name];
  }
  const load = async () => {
    // TODO: make soundfont source configurable
    const url = `${soundfontUrl}/${name}.js`;
    const preset = await fetch(url).then((res) => res.text());
    let [_, data] = preset.split('={');
    return eval('{' + data);
  };
  loadCache[name] = load();
  return loadCache[name];
}

async function getFontBufferSource(name, value, ac) {
  let { note = 'c3', freq } = value;
  let midi;
  if (freq) {
    midi = freqToMidi(freq);
  } else if (typeof note === 'string') {
    midi = noteToMidi(note);
  } else if (typeof note === 'number') {
    midi = note;
  } else {
    throw new Error(`unexpected "note" type "${typeof note}"`);
  }

  const { buffer, zone } = await getFontPitch(name, midi, ac);
  const src = ac.createBufferSource();
  src.buffer = buffer;
  const baseDetune = zone.originalPitch - 100.0 * zone.coarseTune - zone.fineTune;
  const playbackRate = 1.0 * Math.pow(2, (100.0 * midi - baseDetune) / 1200.0);
  // src detune?
  src.playbackRate.value = playbackRate;
  const loop = zone.loopStart > 1 && zone.loopStart < zone.loopEnd;
  if (!loop) ; else {
    src.loop = true;
    src.loopStart = zone.loopStart / zone.sampleRate;
    src.loopEnd = zone.loopEnd / zone.sampleRate;
    //+ (zone.delay ? zone.delay : 0);
  }
  return src;
}

let bufferCache = {};
async function getFontPitch(name, pitch, ac) {
  const key = `${name}:::${pitch}`;
  if (bufferCache[key]) {
    return bufferCache[key];
  }
  // console.log('load buffer', key);
  const load = async () => {
    const preset = await loadFont(name);
    if (!preset) {
      throw new Error(`Could not load soundfont ${name}`);
    }
    const zone = findZone(preset, pitch);
    if (!zone) {
      throw new Error('no soundfont zone found for preset ', name, 'pitch', pitch);
    }
    const buffer = await getBuffer(zone, ac);
    if (!buffer) {
      throw new Error(`no soundfont buffer found for preset ${name}, pitch: ${pitch}`);
    }
    return { buffer, zone };
  };
  bufferCache[key] = load(); // dont await here to cache promise immediately!
  return bufferCache[key];
}

function findZone(preset, pitch) {
  return preset.find((zone) => {
    return zone.keyRangeLow <= pitch && zone.keyRangeHigh + 1 >= pitch;
  });
}

// promisified version of https://github.com/felixroos/webaudiofont/blob/c6f97249b60dcfafc20fca5bb381294a6b2f8f51/npm/dist/WebAudioFontPlayer.js#L740
async function getBuffer(zone, audioContext) {
  if (zone.sample) {
    console.warn('zone.sample untested!');
    const decoded = atob(zone.sample);
    zone.buffer = audioContext.createBuffer(1, decoded.length / 2, zone.sampleRate);
    const float32Array = zone.buffer.getChannelData(0);
    let b1, b2, n;
    for (var i = 0; i < decoded.length / 2; i++) {
      b1 = decoded.charCodeAt(i * 2);
      b2 = decoded.charCodeAt(i * 2 + 1);
      if (b1 < 0) {
        b1 = 256 + b1;
      }
      if (b2 < 0) {
        b2 = 256 + b2;
      }
      n = b2 * 256 + b1;
      if (n >= 65536 / 2) {
        n = n - 65536;
      }
      float32Array[i] = n / 65536.0;
    }
  } else {
    if (zone.file) {
      const datalen = zone.file.length;
      const arraybuffer = new ArrayBuffer(datalen);
      const view = new Uint8Array(arraybuffer);
      const decoded = atob(zone.file);
      let b;
      for (let i = 0; i < decoded.length; i++) {
        b = decoded.charCodeAt(i);
        view[i] = b;
      }
      return new Promise((resolve) => audioContext.decodeAudioData(arraybuffer, resolve));
    }
  }
}

function registerSoundfonts() {
  Object.entries(gm).forEach(([name, fonts]) => {
    registerSound(
      name,
      async (time, value, onended) => {
        const [attack, decay, sustain, release] = getADSRValues([
          value.attack,
          value.decay,
          value.sustain,
          value.release,
        ]);

        const { duration } = value;
        const n = getSoundIndex(value.n, fonts.length);
        const font = fonts[n];
        const ctx = getAudioContext();
        const bufferSource = await getFontBufferSource(font, value, ctx);
        bufferSource.start(time);
        const envGain = ctx.createGain();
        const node = bufferSource.connect(envGain);
        const holdEnd = time + duration;
        getParamADSR(node.gain, attack, decay, sustain, release, 0, 0.3, time, holdEnd, 'linear');
        let envEnd = holdEnd + release + 0.01;

        // vibrato
        let vibratoOscillator = getVibratoOscillator(bufferSource.detune, value, time);
        // pitch envelope
        getPitchEnvelope(bufferSource.detune, value, time, holdEnd);

        bufferSource.stop(envEnd);
        const stop = (releaseTime) => {};
        onceEnded(bufferSource, () => {
          bufferSource.disconnect();
          vibratoOscillator?.stop();
          node.disconnect();
          onended();
        });
        return { node, stop };
      },
      { type: 'soundfont', prebake: true, fonts, pack: 'Soundfonts' },
    );
  });
}

// this list is not used anymore..

const instruments = [
  // Acoustic Grand Piano: Piano
  '0000_JCLive_sf2_file',
  '0000_Aspirin_sf2_file',
  '0000_Chaos_sf2_file',
  '0000_FluidR3_GM_sf2_file',
  '0000_GeneralUserGS_sf2_file',
  //'0000_SBLive_sf2',
  //'0000_SoundBlasterOld_sf2',
  '0001_FluidR3_GM_sf2_file',
  '0001_GeneralUserGS_sf2_file',

  // Bright Acoustic Piano: Piano
  '0010_Aspirin_sf2_file',
  '0010_Chaos_sf2_file',
  '0010_FluidR3_GM_sf2_file',
  '0010_GeneralUserGS_sf2_file',
  '0010_JCLive_sf2_file',
  //'0010_SBLive_sf2',
  //'0010_SoundBlasterOld_sf2',
  '0011_Aspirin_sf2_file',
  '0011_FluidR3_GM_sf2_file',
  '0011_GeneralUserGS_sf2_file',
  '0012_GeneralUserGS_sf2_file', // string??

  // Electric Grand Piano: Piano
  '0020_Aspirin_sf2_file',
  '0020_Chaos_sf2_file',
  '0020_FluidR3_GM_sf2_file',
  '0020_GeneralUserGS_sf2_file',
  '0020_JCLive_sf2_file',
  //'0020_SBLive_sf2',
  //'0020_SoundBlasterOld_sf2',
  '0021_Aspirin_sf2_file',
  '0021_GeneralUserGS_sf2_file',
  // ?
  '0022_Aspirin_sf2_file', // dx7 epiano like

  // Honky-tonk Piano: Piano
  '0030_Aspirin_sf2_file',
  '0030_Chaos_sf2_file',
  '0030_FluidR3_GM_sf2_file',
  '0030_GeneralUserGS_sf2_file',
  '0030_JCLive_sf2_file',
  //'0030_SBLive_sf2',
  //'0030_SoundBlasterOld_sf2',
  '0031_Aspirin_sf2_file',
  '0031_FluidR3_GM_sf2_file',
  '0031_GeneralUserGS_sf2_file',
  //'0031_SoundBlasterOld_sf2', // pianos until here

  // Electric Piano 1: Piano
  '0040_Aspirin_sf2_file',
  '0040_Chaos_sf2_file',
  '0040_FluidR3_GM_sf2_file', // rhodes
  '0040_GeneralUserGS_sf2_file', // staccato rhodes
  '0040_JCLive_sf2_file', // warbly rhodes
  //'0040_SBLive_sf2', // ?
  //'0040_SoundBlasterOld_sf2', // ?
  '0041_FluidR3_GM_sf2_file', // rhodes
  '0041_GeneralUserGS_sf2_file', // staccato rhodes
  //'0041_SoundBlasterOld_sf2', // ?
  '0042_GeneralUserGS_sf2_file', // staccato wurly
  '0043_GeneralUserGS_sf2_file', // high bell
  '0044_GeneralUserGS_sf2_file', // reed organ
  //'0045_GeneralUserGS_sf2_file', // ?
  '0046_GeneralUserGS_sf2_file', // reed organ

  // Electric Piano 2: Piano
  '0050_Aspirin_sf2_file', // glass piano
  '0050_Chaos_sf2_file', // short glass piano
  '0050_FluidR3_GM_sf2_file', // long glass piano !
  // ?
  '0050_GeneralUserGS_sf2_file', // short glass piano
  // cont
  '0050_JCLive_sf2_file', // glass piano
  //'0050_SBLive_sf2', // ?
  //'0050_SoundBlasterOld_sf2', // ?
  '0051_FluidR3_GM_sf2_file', // long lass organ
  '0051_GeneralUserGS_sf2_file',
  //'0052_GeneralUserGS_sf2_file', // ?
  '0053_GeneralUserGS_sf2_file',
  // normal piano...
  '0054_GeneralUserGS_sf2_file', // piano

  // Harpsichord: Piano
  '0060_Aspirin_sf2_file', // harpsichord
  '0060_Chaos_sf2_file',
  '0060_FluidR3_GM_sf2_file', // harpsichord !
  '0060_GeneralUserGS_sf2_file',
  '0060_JCLive_sf2_file',
  //'0060_SBLive_sf2',
  //'0060_SoundBlasterOld_sf2',
  '0061_Aspirin_sf2_file',
  '0061_GeneralUserGS_sf2_file',
  //'0061_SoundBlasterOld_sf2',
  '0062_GeneralUserGS_sf2_file',

  // Clavinet: Piano
  '0070_Aspirin_sf2_file',
  '0070_Chaos_sf2_file',
  '0070_FluidR3_GM_sf2_file',
  // '0070_GeneralUserGS_sf2_file', // half broken
  '0070_JCLive_sf2_file',
  //'0070_SBLive_sf2',
  //'0070_SoundBlasterOld_sf2',
  // '0071_GeneralUserGS_sf2_file', // half broken

  // Celesta: Chromatic Percussion
  '0080_Aspirin_sf2_file',
  '0080_Chaos_sf2_file',
  '0080_FluidR3_GM_sf2_file',
  '0080_GeneralUserGS_sf2_file',
  '0080_JCLive_sf2_file',
  //'0080_SBLive_sf2',
  //'0080_SoundBlasterOld_sf2',
  '0081_FluidR3_GM_sf2_file',
  // '0081_GeneralUserGS_sf2_file', // weird detuned
  //'0081_SoundBlasterOld_sf2',

  // Glockenspiel: Chromatic Percussion
  '0090_Aspirin_sf2_file',
  '0090_Chaos_sf2_file',
  '0090_FluidR3_GM_sf2_file',
  '0090_GeneralUserGS_sf2_file',
  '0090_JCLive_sf2_file',
  //'0090_SBLive_sf2',
  //'0090_SoundBlasterOld_sf2',
  //'0091_SoundBlasterOld_sf2',

  // Music Box: Chromatic Percussion
  '0100_Aspirin_sf2_file',
  '0100_Chaos_sf2_file',
  '0100_FluidR3_GM_sf2_file',
  '0100_GeneralUserGS_sf2_file',
  '0100_JCLive_sf2_file',
  //'0100_SBLive_sf2',
  //'0100_SoundBlasterOld_sf2',
  // '0101_GeneralUserGS_sf2_file', // weird detuned
  //'0101_SoundBlasterOld_sf2',

  // Vibraphone: Chromatic Percussion
  '0110_Aspirin_sf2_file',
  '0110_Chaos_sf2_file',
  '0110_FluidR3_GM_sf2_file',
  '0110_GeneralUserGS_sf2_file',
  '0110_JCLive_sf2_file',
  //'0110_SBLive_sf2',
  //'0110_SoundBlasterOld_sf2',
  '0111_FluidR3_GM_sf2_file',

  // Marimba: Chromatic Percussion
  '0120_Aspirin_sf2_file',
  '0120_Chaos_sf2_file',
  '0120_FluidR3_GM_sf2_file',
  '0120_GeneralUserGS_sf2_file',
  '0120_JCLive_sf2_file',
  //'0120_SBLive_sf2',
  //'0120_SoundBlasterOld_sf2',
  '0121_FluidR3_GM_sf2_file',
  '0121_GeneralUserGS_sf2_file', // not really a marimba

  // Xylophone: Chromatic Percussion
  '0130_Aspirin_sf2_file',
  '0130_Chaos_sf2_file',
  '0130_FluidR3_GM_sf2_file',
  '0130_GeneralUserGS_sf2_file',
  '0130_JCLive_sf2_file',
  //'0130_SBLive_sf2',
  //'0130_SoundBlasterOld_sf2',
  '0131_FluidR3_GM_sf2_file',

  // Tubular Bells: Chromatic Percussion
  '0140_Aspirin_sf2_file',
  // '0140_Chaos_sf2_file', // same as aspirin?
  '0140_FluidR3_GM_sf2_file',
  '0140_GeneralUserGS_sf2_file',
  '0140_JCLive_sf2_file',
  //'0140_SBLive_sf2',
  //'0140_SoundBlasterOld_sf2',
  '0141_FluidR3_GM_sf2_file',
  //'0141_GeneralUserGS_sf2_file',
  '0142_GeneralUserGS_sf2_file', // epiano..
  // '0143_GeneralUserGS_sf2_file', // buggy

  // Dulcimer: Chromatic Percussion
  '0150_Aspirin_sf2_file',
  '0150_Chaos_sf2_file', // long load?
  '0150_FluidR3_GM_sf2_file',
  '0150_GeneralUserGS_sf2_file',
  // '0150_JCLive_sf2_file', // detuned???
  //'0150_SBLive_sf2',
  //'0150_SoundBlasterOld_sf2',
  '0151_FluidR3_GM_sf2_file',

  // Drawbar Organ: Organ
  '0160_Aspirin_sf2_file',
  '0160_Chaos_sf2_file',
  '0160_FluidR3_GM_sf2_file',
  '0160_GeneralUserGS_sf2_file',
  '0160_JCLive_sf2_file',
  //'0160_SBLive_sf2',
  //'0160_SoundBlasterOld_sf2',
  '0161_Aspirin_sf2_file',
  '0161_FluidR3_GM_sf2_file',
  //'0161_SoundBlasterOld_sf2',

  // Percussive Organ: Organ
  '0170_Aspirin_sf2_file',
  '0170_Chaos_sf2_file',
  '0170_FluidR3_GM_sf2_file',
  // '0170_GeneralUserGS_sf2_file', // repitched
  '0170_JCLive_sf2_file',
  //'0170_SBLive_sf2',
  //'0170_SoundBlasterOld_sf2',
  '0171_FluidR3_GM_sf2_file',
  // '0171_GeneralUserGS_sf2_file',  // repitched
  '0172_FluidR3_GM_sf2_file',

  // Rock Organ: Organ
  '0180_Aspirin_sf2_file',
  '0180_Chaos_sf2_file',
  '0180_FluidR3_GM_sf2_file',
  '0180_GeneralUserGS_sf2_file',
  '0180_JCLive_sf2_file',
  //'0180_SBLive_sf2',
  //'0180_SoundBlasterOld_sf2',
  //'0181_Aspirin_sf2_file', // flute
  //'0181_GeneralUserGS_sf2_file', // marimbalike
  //'0181_SoundBlasterOld_sf2',

  // Church Organ: Organ
  '0190_Aspirin_sf2_file',
  '0190_Chaos_sf2_file',
  '0190_FluidR3_GM_sf2_file',
  '0190_GeneralUserGS_sf2_file',
  '0190_JCLive_sf2_file',
  //'0190_SBLive_sf2',
  //'0190_SoundBlasterOld_sf2',
  //'0191_Aspirin_sf2_file', // string??
  //'0191_GeneralUserGS_sf2_file', // weird organ
  //'0191_SoundBlasterOld_sf2',

  // Reed Organ: Organ
  '0200_Aspirin_sf2_file',
  '0200_Chaos_sf2_file',
  '0200_FluidR3_GM_sf2_file',
  '0200_GeneralUserGS_sf2_file',
  '0200_JCLive_sf2_file', // stringy
  //'0200_SBLive_sf2',
  //'0200_SoundBlasterOld_sf2',
  '0201_Aspirin_sf2_file', // stringy
  '0201_FluidR3_GM_sf2_file',
  '0201_GeneralUserGS_sf2_file',
  //'0201_SoundBlasterOld_sf2',
  //'0210_Aspirin_sf2_file', // buggy
  //'0210_Chaos_sf2_file', // buggy

  // Accordion: Organ
  '0210_FluidR3_GM_sf2_file',
  '0210_GeneralUserGS_sf2_file',
  '0210_JCLive_sf2_file',
  //'0210_SBLive_sf2',
  //'0210_SoundBlasterOld_sf2',
  '0211_Aspirin_sf2_file', // stringy
  '0211_FluidR3_GM_sf2_file',
  '0211_GeneralUserGS_sf2_file',
  //'0211_SoundBlasterOld_sf2',
  '0212_GeneralUserGS_sf2_file',

  // Harmonica: Organ
  '0220_Aspirin_sf2_file',
  '0220_Chaos_sf2_file',
  '0220_FluidR3_GM_sf2_file',
  '0220_GeneralUserGS_sf2_file',
  '0220_JCLive_sf2_file',
  //'0220_SBLive_sf2',
  //'0220_SoundBlasterOld_sf2',
  '0221_FluidR3_GM_sf2_file',

  // Tango Accordion: Organ
  '0230_Aspirin_sf2_file',
  '0230_Chaos_sf2_file',
  '0230_FluidR3_GM_sf2_file',
  '0230_GeneralUserGS_sf2_file',
  '0230_JCLive_sf2_file',
  //'0230_SBLive_sf2',
  //'0230_SoundBlasterOld_sf2',
  '0231_FluidR3_GM_sf2_file',
  '0231_GeneralUserGS_sf2_file', // warbly
  '0231_JCLive_sf2_file',
  //'0231_SoundBlasterOld_sf2',
  '0232_FluidR3_GM_sf2_file',
  '0233_FluidR3_GM_sf2_file',

  // Acoustic Guitar (nylon): Guitar
  '0240_Aspirin_sf2_file',
  '0240_Chaos_sf2_file',
  '0240_FluidR3_GM_sf2_file',
  '0240_GeneralUserGS_sf2_file',
  '0240_JCLive_sf2_file',
  '0240_LK_Godin_Nylon_SF2_file',
  //'0240_SBLive_sf2',
  //'0240_SoundBlasterOld_sf2',
  // '0241_GeneralUserGS_sf2_file', // organ like
  '0241_JCLive_sf2_file',
  '0242_JCLive_sf2_file',
  '0243_JCLive_sf2_file',

  // Acoustic Guitar (steel): Guitar
  '0253_Acoustic_Guitar_sf2_file',
  '0250_Aspirin_sf2_file',
  '0250_Chaos_sf2_file',
  '0250_FluidR3_GM_sf2_file',
  '0250_GeneralUserGS_sf2_file',
  // '0250_JCLive_sf2_file', // detuned
  '0250_LK_AcousticSteel_SF2_file',
  //'0250_SBLive_sf2',
  //'0250_SoundBlasterOld_sf2',
  //'0251_Acoustic_Guitar_sf2_file', // detuned?
  // '0251_GeneralUserGS_sf2_file', // broken: missing pitches
  // '0252_Acoustic_Guitar_sf2_file', // detuned..
  // '0252_GeneralUserGS_sf2_file', // broken: missing pitches
  '0253_Acoustic_Guitar_sf2_file',
  '0253_GeneralUserGS_sf2_file',
  '0254_Acoustic_Guitar_sf2_file', // bends.. detuned
  '0254_GeneralUserGS_sf2_file',
  //'0255_GeneralUserGS_sf2_file', // no guitar..

  // Electric Guitar (jazz): Guitar
  '0260_Aspirin_sf2_file', // sounds like an epiano
  '0260_Chaos_sf2_file', // weird but cool detune
  '0260_FluidR3_GM_sf2_file',
  '0260_GeneralUserGS_sf2_file',
  '0260_JCLive_sf2_file',
  //'0260_SBLive_sf2',
  //'0260_SoundBlasterOld_sf2',
  '0260_Stratocaster_sf2_file', // -1 octave
  '0261_GeneralUserGS_sf2_file',
  //'0261_SoundBlasterOld_sf2',
  '0261_Stratocaster_sf2_file', // -1 octave
  '0262_Stratocaster_sf2_file', // -1 octave

  // Electric Guitar (clean): Guitar
  '0270_Aspirin_sf2_file',
  '0270_Chaos_sf2_file', // sounds meh
  '0270_FluidR3_GM_sf2_file',
  '0270_GeneralUserGS_sf2_file',
  //'0270_Gibson_Les_Paul_sf2_file', // detuned
  // '0270_JCLive_sf2_file', // broken: missing notes
  '0270_SBAWE32_sf2_file',
  //'0270_SBLive_sf2',
  //'0270_SoundBlasterOld_sf2',
  '0270_Stratocaster_sf2_file', // -1 octave
  '0271_GeneralUserGS_sf2_file',
  '0271_Stratocaster_sf2_file', // -1 octave
  '0272_Stratocaster_sf2_file', // -1 octave

  // Electric Guitar (muted): Guitar
  '0280_Aspirin_sf2_file',
  '0280_Chaos_sf2_file',
  // '0280_FluidR3_GM_sf2_file', // broken: wrong notes
  '0280_GeneralUserGS_sf2_file',
  '0280_JCLive_sf2_file',
  //'0280_LesPaul_sf2', // missing
  '0280_LesPaul_sf2_file', // not really muted..
  '0280_SBAWE32_sf2_file',
  //'0280_SBLive_sf2',
  //'0280_SoundBlasterOld_sf2',
  '0281_Aspirin_sf2_file',
  '0281_FluidR3_GM_sf2_file',
  '0281_GeneralUserGS_sf2_file',
  '0282_FluidR3_GM_sf2_file',
  // '0282_GeneralUserGS_sf2_file', // broken: missing notes
  // '0283_GeneralUserGS_sf2_file', // missing

  // Overdriven Guitar: Guitar
  '0290_Aspirin_sf2_file',
  '0290_Chaos_sf2_file',
  '0290_FluidR3_GM_sf2_file',
  '0290_GeneralUserGS_sf2_file',
  //'0290_JCLive_sf2_file', // detuned....
  //'0290_LesPaul_sf2', // broken
  '0290_LesPaul_sf2_file',
  '0290_SBAWE32_sf2_file',
  //'0290_SBLive_sf2',
  //'0290_SoundBlasterOld_sf2',
  // '0291_Aspirin_sf2_file', // broken
  // '0291_LesPaul_sf2', // broken
  '0291_LesPaul_sf2_file',
  '0291_SBAWE32_sf2_file',
  //'0291_SoundBlasterOld_sf2',
  '0292_Aspirin_sf2_file',
  // '0292_LesPaul_sf2', // broken
  '0292_LesPaul_sf2_file',

  // Distortion Guitar: Guitar
  '0300_Aspirin_sf2_file',
  '0300_Chaos_sf2_file',
  '0300_FluidR3_GM_sf2_file',
  '0300_GeneralUserGS_sf2_file',
  // '0300_JCLive_sf2_file', // broken
  // '0300_LesPaul_sf2', // broken
  '0300_LesPaul_sf2_file',
  //'0300_SBAWE32_sf2_file', // -2 octave
  //'0300_SBLive_sf2',
  //'0300_SoundBlasterOld_sf2',
  // '0301_Aspirin_sf2_file', // missing
  //'0301_FluidR3_GM_sf2_file', // weird broken bell
  // '0301_GeneralUserGS_sf2_file', // broken
  // '0301_JCLive_sf2_file', // broken
  // '0301_LesPaul_sf2', // missing
  // '0301_LesPaul_sf2_file', // + 1 oct?
  '0302_Aspirin_sf2_file',
  // '0302_GeneralUserGS_sf2_file', // not a guitar..
  //'0302_JCLive_sf2_file', // broken...
  // '0303_Aspirin_sf2_file', // guitar harmonic??
  '0304_Aspirin_sf2_file',

  // Guitar Harmonics: Guitar
  '0310_Aspirin_sf2_file',
  '0310_Chaos_sf2_file',
  '0310_FluidR3_GM_sf2_file', // weird..
  //'0310_GeneralUserGS_sf2_file', // weird..
  // '0310_JCLive_sf2_file', // weird
  //'0310_LesPaul_sf2', // missing
  //'0310_LesPaul_sf2_file', // wrong pitches
  //'0310_SBAWE32_sf2_file', // wrong pitches
  //'0310_SBLive_sf2',
  //'0310_SoundBlasterOld_sf2',
  //'0311_FluidR3_GM_sf2_file', // knackt
  //'0311_GeneralUserGS_sf2_file', // wrong notes

  // Acoustic Bass: Bass
  '0320_Aspirin_sf2_file',
  '0320_Chaos_sf2_file',
  '0320_FluidR3_GM_sf2_file',
  // '0320_GeneralUserGS_sf2_file', // missing notes
  '0320_JCLive_sf2_file',
  //'0320_SBLive_sf2',
  //'0320_SoundBlasterOld_sf2',
  // '0321_GeneralUserGS_sf2_file', // nice sound but missing notes
  // '0322_GeneralUserGS_sf2_file', // missing notes

  // Electric Bass (finger): Bass
  '0330_Aspirin_sf2_file',
  //'0330_Chaos_sf2_file', // same as last
  '0330_FluidR3_GM_sf2_file', // knackt..
  '0330_GeneralUserGS_sf2_file', // -1 oct
  '0330_JCLive_sf2_file',
  //'0330_SBLive_sf2',
  //'0330_SoundBlasterOld_sf2',
  //'0331_GeneralUserGS_sf2_file', // knackt
  // '0332_GeneralUserGS_sf2_file', // missing

  // Electric Bass (pick): Bass
  '0340_Aspirin_sf2_file',
  //'0340_Chaos_sf2_file', // same as last
  '0340_FluidR3_GM_sf2_file',
  '0340_GeneralUserGS_sf2_file', // -1oct
  '0340_JCLive_sf2_file',
  //'0340_SBLive_sf2',
  //'0340_SoundBlasterOld_sf2',
  '0341_Aspirin_sf2_file',
  //'0341_GeneralUserGS_sf2_file', // knackt

  // Fretless Bass: Bass
  '0350_Aspirin_sf2_file',
  // '0350_Chaos_sf2_file', // same as last
  //'0350_FluidR3_GM_sf2_file', // knackt
  //'0350_GeneralUserGS_sf2_file', // -1 oct + knackt
  '0350_JCLive_sf2_file', // weird detuned
  //'0350_SBLive_sf2',
  //'0350_SoundBlasterOld_sf2',
  //'0351_GeneralUserGS_sf2_file', // missing

  // Slap Bass 1: Bass
  '0360_Aspirin_sf2_file',
  '0360_Chaos_sf2_file',
  '0360_FluidR3_GM_sf2_file', // knackt
  //'0360_GeneralUserGS_sf2_file', // -1 oct
  '0360_JCLive_sf2_file',
  //'0360_SBLive_sf2',
  //'0360_SoundBlasterOld_sf2',
  //'0361_GeneralUserGS_sf2_file', // missing

  // Slap Bass 2: Bass
  '0370_Aspirin_sf2_file',
  // '0370_Chaos_sf2_file', // same as last
  '0370_FluidR3_GM_sf2_file',
  '0370_GeneralUserGS_sf2_file',
  '0370_JCLive_sf2_file',
  //'0370_SBLive_sf2',
  //'0370_SoundBlasterOld_sf2',
  //'0371_GeneralUserGS_sf2_file', // missing
  //'0372_GeneralUserGS_sf2_file', // detuned
  //'0385_GeneralUserGS_sf2_file', // missing

  // Synth Bass 1: Bass
  '0380_Aspirin_sf2_file', // laut!
  '0380_Chaos_sf2_file',
  '0380_FluidR3_GM_sf2_file', // bisl detuned
  // '0380_GeneralUserGS_sf2_file', // laut
  '0380_JCLive_sf2_file',
  //'0380_SBLive_sf2',
  //'0380_SoundBlasterOld_sf2',
  '0381_FluidR3_GM_sf2_file', // bisl detuned
  '0381_GeneralUserGS_sf2_file',
  //'0382_FluidR3_GM_sf2_file', // kein synth bass
  '0382_GeneralUserGS_sf2_file',
  '0383_GeneralUserGS_sf2_file',
  '0384_GeneralUserGS_sf2_file',
  //'0386_GeneralUserGS_sf2_file', // knackt
  '0387_GeneralUserGS_sf2_file',

  // Synth Bass 2: Bass
  '0390_Aspirin_sf2_file',
  // '0390_Chaos_sf2_file', // same as last
  '0390_FluidR3_GM_sf2_file',
  '0390_GeneralUserGS_sf2_file',
  '0390_JCLive_sf2_file',
  //'0390_SBLive_sf2',
  //'0390_SoundBlasterOld_sf2',
  '0391_FluidR3_GM_sf2_file', // lauuut
  // '0391_GeneralUserGS_sf2_file', // missing
  //'0391_SoundBlasterOld_sf2',
  '0392_FluidR3_GM_sf2_file', // lauut
  //'0392_GeneralUserGS_sf2_file', // kein synth und -1oct
  '0393_GeneralUserGS_sf2_file', // lauuuut

  // Violin: Strings
  '0400_Aspirin_sf2_file',
  '0400_Chaos_sf2_file',
  '0400_FluidR3_GM_sf2_file',
  '0400_GeneralUserGS_sf2_file',
  '0400_JCLive_sf2_file',
  //'0400_SBLive_sf2',
  //'0400_SoundBlasterOld_sf2',
  '0401_Aspirin_sf2_file', // synth
  '0401_FluidR3_GM_sf2_file',
  '0401_GeneralUserGS_sf2_file',
  '0402_GeneralUserGS_sf2_file', // pizzicato

  // Viola: Strings
  '0410_Aspirin_sf2_file',
  // '0410_Chaos_sf2_file', // laut und sehr unstringy
  '0410_FluidR3_GM_sf2_file',
  '0410_GeneralUserGS_sf2_file',
  '0410_JCLive_sf2_file', // <3
  //'0410_SBLive_sf2',
  //'0410_SoundBlasterOld_sf2',
  '0411_FluidR3_GM_sf2_file',

  // Cello: Strings
  '0420_Aspirin_sf2_file',
  // '0420_Chaos_sf2_file', // kein cello und laut
  '0420_FluidR3_GM_sf2_file',
  '0420_GeneralUserGS_sf2_file',
  '0420_JCLive_sf2_file',
  //'0420_SBLive_sf2',
  //'0420_SoundBlasterOld_sf2',
  '0421_FluidR3_GM_sf2_file',
  '0421_GeneralUserGS_sf2_file', // pizzicato

  // Contrabass: Strings
  '0430_Aspirin_sf2_file',
  '0430_Chaos_sf2_file',
  // '0430_FluidR3_GM_sf2_file', // missing notes
  '0430_GeneralUserGS_sf2_file',
  //'0430_JCLive_sf2_file', // -1 oct und meh
  //'0430_SBLive_sf2',
  //'0430_SoundBlasterOld_sf2',
  // '0431_FluidR3_GM_sf2_file', // missing notes

  // Tremolo Strings: Strings
  '0440_Aspirin_sf2_file',
  '0440_Chaos_sf2_file',
  //'0440_FluidR3_GM_sf2_file', // huuuge
  '0440_GeneralUserGS_sf2_file',
  '0440_JCLive_sf2_file',
  //'0440_SBLive_sf2',
  //'0440_SoundBlasterOld_sf2',
  '0441_GeneralUserGS_sf2_file',
  '0442_GeneralUserGS_sf2_file',

  // Pizzicato Strings: Strings
  '0450_Aspirin_sf2_file',
  '0450_Chaos_sf2_file', // same as last
  '0450_FluidR3_GM_sf2_file', // chrono trigger flashback
  '0450_GeneralUserGS_sf2_file', // -1 oct?
  '0450_JCLive_sf2_file', // filter env
  //'0450_SBLive_sf2',
  //'0450_SoundBlasterOld_sf2',
  '0451_FluidR3_GM_sf2_file',

  // Orchestral Harp: Strings
  '0460_Aspirin_sf2_file',
  // '0460_Chaos_sf2_file', // knackt
  '0460_FluidR3_GM_sf2_file',
  '0460_GeneralUserGS_sf2_file',
  '0460_JCLive_sf2_file',
  //'0460_SBLive_sf2',
  //'0460_SoundBlasterOld_sf2',
  '0461_FluidR3_GM_sf2_file',

  // Timpani: Strings
  '0470_Aspirin_sf2_file',
  '0470_Chaos_sf2_file',
  '0470_FluidR3_GM_sf2_file',
  '0470_GeneralUserGS_sf2_file',
  // '0470_JCLive_sf2_file', // wrong pitches
  //'0470_SBLive_sf2',
  //'0470_SoundBlasterOld_sf2',
  '0471_FluidR3_GM_sf2_file',
  '0471_GeneralUserGS_sf2_file',

  // String Ensemble 1: Ensemble
  '0480_Aspirin_sf2_file',
  '0480_Chaos_sf2_file',
  '0480_FluidR3_GM_sf2_file', // large
  '0480_GeneralUserGS_sf2_file',
  '0480_JCLive_sf2_file',
  //'0480_SBLive_sf2',
  //'0480_SoundBlasterOld_sf2',
  // these dont work..
  //'04810_GeneralUserGS_sf2_file', // missing notes + brass
  //'04811_GeneralUserGS_sf2_file',  // missing notes + brass
  //'04812_GeneralUserGS_sf2_file',
  //'04813_GeneralUserGS_sf2_file',
  //'04814_GeneralUserGS_sf2_file',
  //'04815_GeneralUserGS_sf2_file',
  //'04816_GeneralUserGS_sf2_file',
  //'04817_GeneralUserGS_sf2_file',
  '0481_Aspirin_sf2_file',
  '0481_FluidR3_GM_sf2_file', // brass
  '0481_GeneralUserGS_sf2_file',
  '0482_Aspirin_sf2_file', // brass
  '0482_GeneralUserGS_sf2_file',
  '0483_GeneralUserGS_sf2_file', // brass
  // another block of buggyness:
  //'0484_GeneralUserGS_sf2_file', // keys?! + knackt
  //'0485_GeneralUserGS_sf2_file', // missing notes
  //'0486_GeneralUserGS_sf2_file',
  //'0487_GeneralUserGS_sf2_file',
  //'0488_GeneralUserGS_sf2_file',
  //'0489_GeneralUserGS_sf2_file',

  // String Ensemble 2: Ensemble
  '0490_Aspirin_sf2_file',
  '0490_Chaos_sf2_file',
  '0490_FluidR3_GM_sf2_file', // large
  '0490_GeneralUserGS_sf2_file',
  '0490_JCLive_sf2_file',
  //'0490_SBLive_sf2',
  //'0490_SoundBlasterOld_sf2',
  '0491_GeneralUserGS_sf2_file',
  '0492_GeneralUserGS_sf2_file',

  // Synth Strings 1: Ensemble
  '0500_Aspirin_sf2_file',
  // '0500_Chaos_sf2_file', // same as above
  //'0500_FluidR3_GM_sf2_file', // detune + knack
  '0500_GeneralUserGS_sf2_file',
  '0500_JCLive_sf2_file',
  //'0500_SBLive_sf2',
  //'0500_SoundBlasterOld_sf2',
  '0501_FluidR3_GM_sf2_file',
  // '0501_GeneralUserGS_sf2_file', // crackles
  // '0502_FluidR3_GM_sf2_file', // missing
  '0502_GeneralUserGS_sf2_file',
  '0503_FluidR3_GM_sf2_file', // large
  // '0504_FluidR3_GM_sf2_file', // missing
  '0505_FluidR3_GM_sf2_file',

  // Synth Strings 2: Ensemble
  '0510_Aspirin_sf2_file',
  '0510_Chaos_sf2_file',
  // '0510_FluidR3_GM_sf2_file', // detune + crackle
  '0510_GeneralUserGS_sf2_file',
  //'0510_JCLive_sf2_file', // laarge and meh
  //'0510_SBLive_sf2', // missing
  //'0510_SoundBlasterOld_sf2',
  '0511_GeneralUserGS_sf2_file', // crackly
  //'0511_SoundBlasterOld_sf2',

  // Choir Aahs: Ensemble
  '0520_Aspirin_sf2_file',
  '0520_Chaos_sf2_file',
  '0520_FluidR3_GM_sf2_file',
  '0520_GeneralUserGS_sf2_file',
  '0520_JCLive_sf2_file',
  //'0520_SBLive_sf2',
  '0520_Soul_Ahhs_sf2_file', // large
  //'0520_SoundBlasterOld_sf2',
  '0521_FluidR3_GM_sf2_file',
  '0521_Soul_Ahhs_sf2_file', // large
  //'0521_SoundBlasterOld_sf2',
  '0522_Soul_Ahhs_sf2_file', // large

  // Voice Oohs: Ensemble
  '0530_Aspirin_sf2_file',
  '0530_Chaos_sf2_file',
  '0530_FluidR3_GM_sf2_file',
  '0530_GeneralUserGS_sf2_file',
  //'0530_JCLive_sf2_file', // same as above
  //'0530_SBLive_sf2',
  // '0530_Soul_Ahhs_sf2_file', // not ooh
  //'0530_SoundBlasterOld_sf2',
  '0531_FluidR3_GM_sf2_file',
  // '0531_GeneralUserGS_sf2_file', // ends crackle
  '0531_JCLive_sf2_file',
  //'0531_SoundBlasterOld_sf2',

  // Synth Choir: Ensemble
  '0540_Aspirin_sf2_file',
  '0540_Chaos_sf2_file',
  '0540_FluidR3_GM_sf2_file',
  '0540_GeneralUserGS_sf2_file',
  //'0540_JCLive_sf2_file', // large + crackles
  //'0540_SBLive_sf2',
  //'0540_SoundBlasterOld_sf2',
  '0541_FluidR3_GM_sf2_file',

  // Orchestra Hit: Ensemble
  '0550_Aspirin_sf2_file',
  '0550_Chaos_sf2_file',
  '0550_FluidR3_GM_sf2_file',
  '0550_GeneralUserGS_sf2_file',
  //'0550_JCLive_sf2_file', // same as above
  //'0550_SBLive_sf2',
  //'0550_SoundBlasterOld_sf2',
  //'0551_Aspirin_sf2_file', // not an orch hit..
  '0551_FluidR3_GM_sf2_file',

  // Trumpet: Brass
  '0560_Aspirin_sf2_file',
  '0560_Chaos_sf2_file',
  '0560_FluidR3_GM_sf2_file',
  //'0560_GeneralUserGS_sf2_file', // -1 oct
  '0560_JCLive_sf2_file',
  //'0560_SBLive_sf2',
  //'0560_SoundBlasterOld_sf2',

  // Trombone: Brass
  '0570_Aspirin_sf2_file',
  '0570_Chaos_sf2_file',
  '0570_FluidR3_GM_sf2_file',
  '0570_GeneralUserGS_sf2_file',
  //'0570_JCLive_sf2_file', // -1oct
  //'0570_SBLive_sf2',
  //'0570_SoundBlasterOld_sf2',
  '0571_GeneralUserGS_sf2_file',

  // Tuba: Brass
  '0580_Aspirin_sf2_file',
  '0580_Chaos_sf2_file',
  '0580_FluidR3_GM_sf2_file',
  '0580_GeneralUserGS_sf2_file',
  //'0580_JCLive_sf2_file', // -1oct
  //'0580_SBLive_sf2',
  //'0580_SoundBlasterOld_sf2',
  //'0581_GeneralUserGS_sf2_file', // missing

  // Muted Trumpet: Brass
  '0590_Aspirin_sf2_file',
  '0590_Chaos_sf2_file',
  '0590_FluidR3_GM_sf2_file',
  '0590_GeneralUserGS_sf2_file',
  '0590_JCLive_sf2_file', // winner
  //'0590_SBLive_sf2',
  //'0590_SoundBlasterOld_sf2',
  // '0591_GeneralUserGS_sf2_file', // missing

  // French Horn: Brass
  '0600_Aspirin_sf2_file',
  //'0600_Chaos_sf2_file', // weird jumps
  '0600_FluidR3_GM_sf2_file', // tiny crackles
  '0600_GeneralUserGS_sf2_file', // tiny crackles
  '0600_JCLive_sf2_file', // tiny crackles
  //'0600_SBLive_sf2',
  //'0600_SoundBlasterOld_sf2',
  '0601_FluidR3_GM_sf2_file',
  //'0601_GeneralUserGS_sf2_file', // tiny crackles
  // '0602_GeneralUserGS_sf2_file', // bad gain diffs
  // '0603_GeneralUserGS_sf2_file', // tiny crackles

  // Brass Section: Brass
  '0610_Aspirin_sf2_file',
  '0610_Chaos_sf2_file',
  '0610_FluidR3_GM_sf2_file', // large
  '0610_GeneralUserGS_sf2_file',
  '0610_JCLive_sf2_file',
  //'0610_SBLive_sf2',
  //'0610_SoundBlasterOld_sf2',
  // '0611_GeneralUserGS_sf2_file', // missing sounds
  // '0612_GeneralUserGS_sf2_file',
  //'0613_GeneralUserGS_sf2_file', // -1 oct
  // '0614_GeneralUserGS_sf2_file', // missing sounds
  // '0615_GeneralUserGS_sf2_file', // missing sounds

  // Synth Brass 1: Brass
  '0620_Aspirin_sf2_file',
  //'0620_Chaos_sf2_file', // weird gain diff
  '0620_FluidR3_GM_sf2_file',
  //'0620_GeneralUserGS_sf2_file', // loooud
  // '0620_JCLive_sf2_file', // weird gain diff
  //'0620_SBLive_sf2',
  //'0620_SoundBlasterOld_sf2',
  '0621_Aspirin_sf2_file',
  '0621_FluidR3_GM_sf2_file',
  // '0621_GeneralUserGS_sf2_file', // detune + loooud
  //'0622_FluidR3_GM_sf2_file', // loud..
  //'0622_GeneralUserGS_sf2_file', // loud + crackles

  // Synth Brass 2: Brass
  '0630_Aspirin_sf2_file',
  '0630_Chaos_sf2_file',
  '0630_FluidR3_GM_sf2_file',
  //'0630_GeneralUserGS_sf2_file', // detune + looud
  '0630_JCLive_sf2_file',
  //'0630_SBLive_sf2',
  //'0630_SoundBlasterOld_sf2',
  // '0631_Aspirin_sf2_file', // looud + detune + gain diffs
  '0631_FluidR3_GM_sf2_file',
  //'0631_GeneralUserGS_sf2_file', // crackles
  '0632_FluidR3_GM_sf2_file',
  '0633_FluidR3_GM_sf2_file', // tiny crackles

  // Soprano Sax: Reed
  '0640_Aspirin_sf2_file',
  '0640_Chaos_sf2_file',
  '0640_FluidR3_GM_sf2_file',
  // '0640_GeneralUserGS_sf2_file', // crackles
  '0640_JCLive_sf2_file',
  //'0640_SBLive_sf2',
  //'0640_SoundBlasterOld_sf2',
  '0641_FluidR3_GM_sf2_file',

  // Alto Sax: Reed
  //'0650_Aspirin_sf2_file', // this is not an alto sax
  '0650_Chaos_sf2_file',
  '0650_FluidR3_GM_sf2_file', // sounds really stringy
  '0650_GeneralUserGS_sf2_file',
  '0650_JCLive_sf2_file',
  //'0650_SBLive_sf2',
  //'0650_SoundBlasterOld_sf2',
  '0651_Aspirin_sf2_file',
  '0651_FluidR3_GM_sf2_file', // really stringy

  // Tenor Sax: Reed
  '0660_Aspirin_sf2_file',
  '0660_Chaos_sf2_file',
  //'0660_FluidR3_GM_sf2_file', // weird pitches
  '0660_GeneralUserGS_sf2_file',
  '0660_JCLive_sf2_file',
  //'0660_SBLive_sf2',
  //'0660_SoundBlasterOld_sf2',
  // '0661_FluidR3_GM_sf2_file', // weird pitches
  // '0661_GeneralUserGS_sf2_file', // missing

  // Baritone Sax: Reed
  '0670_Aspirin_sf2_file',
  '0670_Chaos_sf2_file',
  '0670_FluidR3_GM_sf2_file', // huge
  '0670_GeneralUserGS_sf2_file',
  '0670_JCLive_sf2_file',
  //'0670_SBLive_sf2',
  //'0670_SoundBlasterOld_sf2',
  '0671_FluidR3_GM_sf2_file', // huge

  // Oboe: Reed
  //'0680_Aspirin_sf2_file', // tiny crackles
  '0680_Chaos_sf2_file', // tiny crackles
  '0680_FluidR3_GM_sf2_file', // tiny crackles
  '0680_GeneralUserGS_sf2_file',
  '0680_JCLive_sf2_file',
  //'0680_SBLive_sf2',
  //'0680_SoundBlasterOld_sf2',
  '0681_FluidR3_GM_sf2_file', // tiny crackles

  // English Horn: Reed
  '0690_Aspirin_sf2_file',
  //'0690_Chaos_sf2_file', // detuned
  '0690_FluidR3_GM_sf2_file',
  //'0690_GeneralUserGS_sf2_file', // +1 oct
  '0690_JCLive_sf2_file',
  //'0690_SBLive_sf2',
  //'0690_SoundBlasterOld_sf2',
  '0691_FluidR3_GM_sf2_file', // tiny crackles

  // Bassoon: Reed
  //'0700_Aspirin_sf2_file', // detune + gain diffs
  // '0700_Chaos_sf2_file', // detune + crackles
  '0700_FluidR3_GM_sf2_file',
  '0700_GeneralUserGS_sf2_file', // tiny crackles
  '0700_JCLive_sf2_file',
  //'0700_SBLive_sf2',
  //'0700_SoundBlasterOld_sf2',
  '0701_FluidR3_GM_sf2_file', // tiny crackles
  //'0701_GeneralUserGS_sf2_file', // missing

  // Clarinet: Reed
  '0710_Aspirin_sf2_file', // tiny crackles
  '0710_Chaos_sf2_file', // tiny crackles
  '0710_FluidR3_GM_sf2_file',
  '0710_GeneralUserGS_sf2_file',
  '0710_JCLive_sf2_file',
  //'0710_SBLive_sf2',
  //'0710_SoundBlasterOld_sf2',
  '0711_FluidR3_GM_sf2_file',

  // Piccolo: Pipe
  '0720_Aspirin_sf2_file', // +1oct
  // '0720_Chaos_sf2_file', // not a piccolo
  '0720_FluidR3_GM_sf2_file',
  '0720_GeneralUserGS_sf2_file', // crackles
  '0720_JCLive_sf2_file',
  //'0720_SBLive_sf2',
  //'0720_SoundBlasterOld_sf2',
  '0721_FluidR3_GM_sf2_file',
  //'0721_SoundBlasterOld_sf2',

  // Flute: Pipe
  '0730_Aspirin_sf2_file',
  //'0730_Chaos_sf2_file', // etune
  '0730_FluidR3_GM_sf2_file',
  '0730_GeneralUserGS_sf2_file',
  '0730_JCLive_sf2_file',
  //'0730_SBLive_sf2',
  //'0730_SoundBlasterOld_sf2',
  //'0731_Aspirin_sf2_file', // not a flute
  '0731_FluidR3_GM_sf2_file',
  //'0731_SoundBlasterOld_sf2',

  // Recorder: Pipe
  '0740_Aspirin_sf2_file',
  '0740_Chaos_sf2_file',
  '0740_FluidR3_GM_sf2_file',
  '0740_GeneralUserGS_sf2_file',
  '0740_JCLive_sf2_file',
  //'0740_SBLive_sf2',
  //'0740_SoundBlasterOld_sf2',
  // '0741_GeneralUserGS_sf2_file', // missing

  // Pan Flute: Pipe
  '0750_Aspirin_sf2_file', // staccato
  '0750_Chaos_sf2_file',
  '0750_FluidR3_GM_sf2_file',
  '0750_GeneralUserGS_sf2_file', // crackles
  '0750_JCLive_sf2_file',
  //'0750_SBLive_sf2',
  //'0750_SoundBlasterOld_sf2',
  '0751_Aspirin_sf2_file',
  '0751_FluidR3_GM_sf2_file',
  '0751_GeneralUserGS_sf2_file', // crackles
  //'0751_SoundBlasterOld_sf2',

  // Blown bottle: Pipe
  // '0760_Aspirin_sf2_file', // same as below w crackle
  '0760_Chaos_sf2_file',
  '0760_FluidR3_GM_sf2_file',
  '0760_GeneralUserGS_sf2_file',
  '0760_JCLive_sf2_file',
  //'0760_SBLive_sf2',
  //'0760_SoundBlasterOld_sf2',
  '0761_FluidR3_GM_sf2_file',
  // '0761_GeneralUserGS_sf2_file', // missing
  //'0761_SoundBlasterOld_sf2',
  // '0762_GeneralUserGS_sf2_file', // missing

  // Shakuhachi: Pipe
  '0770_Aspirin_sf2_file', // staccato
  //'0770_Chaos_sf2_file', // not shakuhachi
  '0770_FluidR3_GM_sf2_file',
  '0770_GeneralUserGS_sf2_file',
  '0770_JCLive_sf2_file',
  //'0770_SBLive_sf2',
  //'0770_SoundBlasterOld_sf2',
  '0771_FluidR3_GM_sf2_file',
  // '0771_GeneralUserGS_sf2_file', // missing
  // '0772_GeneralUserGS_sf2_file', // missing

  // Whistle: Pipe
  '0780_Aspirin_sf2_file', // crackles
  '0780_Chaos_sf2_file', // crackles
  '0780_FluidR3_GM_sf2_file',
  //'0780_GeneralUserGS_sf2_file', // loud..
  '0780_JCLive_sf2_file', // crackles
  //'0780_SBLive_sf2',
  //'0780_SoundBlasterOld_sf2',
  // '0781_GeneralUserGS_sf2_file', // detune + crackles

  // Ocarina: Pipe
  '0790_Aspirin_sf2_file', // tiny crackles
  //'0790_Chaos_sf2_file', // same as above
  '0790_FluidR3_GM_sf2_file',
  '0790_GeneralUserGS_sf2_file',
  '0790_JCLive_sf2_file', // crackles
  //'0790_SBLive_sf2',
  //'0790_SoundBlasterOld_sf2',
  //'0791_GeneralUserGS_sf2_file', // missing

  // Lead 1 (square): Synth Lead
  '0800_Aspirin_sf2_file',
  '0800_Chaos_sf2_file',
  '0800_FluidR3_GM_sf2_file',
  // '0800_GeneralUserGS_sf2_file', // detuned
  // '0800_JCLive_sf2_file', // detuned
  //'0800_SBLive_sf2',
  //'0800_SoundBlasterOld_sf2',
  //'0801_FluidR3_GM_sf2_file', // detune
  // '0801_GeneralUserGS_sf2_file', // detune

  // Lead 2 (sawtooth): Synth Lead
  '0810_Aspirin_sf2_file',
  '0810_Chaos_sf2_file',
  '0810_FluidR3_GM_sf2_file',
  '0810_GeneralUserGS_sf2_file',
  '0810_JCLive_sf2_file',
  //'0810_SBLive_sf2',
  //'0810_SoundBlasterOld_sf2',
  '0811_Aspirin_sf2_file',
  '0811_GeneralUserGS_sf2_file',
  //'0811_SoundBlasterOld_sf2',

  // Lead 3 (calliope): Synth Lead
  '0820_Aspirin_sf2_file',
  '0820_Chaos_sf2_file',
  '0820_FluidR3_GM_sf2_file',
  '0820_GeneralUserGS_sf2_file',
  '0820_JCLive_sf2_file', // +1 oct
  //'0820_SBLive_sf2',
  //'0820_SoundBlasterOld_sf2',
  '0821_FluidR3_GM_sf2_file',
  '0821_GeneralUserGS_sf2_file',
  //'0821_SoundBlasterOld_sf2',
  // '0822_GeneralUserGS_sf2_file', // missing
  //'0823_GeneralUserGS_sf2_file', // missing

  // Lead 4 (chiff): Synth Lead
  '0830_Aspirin_sf2_file',
  // '0830_Chaos_sf2_file', // same as above
  '0830_FluidR3_GM_sf2_file',
  '0830_GeneralUserGS_sf2_file',
  '0830_JCLive_sf2_file', // flute synth
  //'0830_SBLive_sf2',
  //'0830_SoundBlasterOld_sf2',
  '0831_FluidR3_GM_sf2_file',
  '0831_GeneralUserGS_sf2_file',
  //'0831_SoundBlasterOld_sf2',

  // Lead 5 (charang): Synth Lead
  '0840_Aspirin_sf2_file',
  '0840_Chaos_sf2_file',
  '0840_FluidR3_GM_sf2_file',
  '0840_GeneralUserGS_sf2_file',
  '0840_JCLive_sf2_file', // detune?
  //'0840_SBLive_sf2',
  //'0840_SoundBlasterOld_sf2',
  '0841_Aspirin_sf2_file',
  '0841_Chaos_sf2_file',
  '0841_FluidR3_GM_sf2_file',
  '0841_GeneralUserGS_sf2_file',
  //'0841_JCLive_sf2_file', // +1oct + detune
  //'0841_SoundBlasterOld_sf2',
  '0842_FluidR3_GM_sf2_file',

  // Lead 6 (voice): Synth Lead
  '0850_Aspirin_sf2_file',
  // '0850_Chaos_sf2_file', // same as above
  '0850_FluidR3_GM_sf2_file',
  // '0850_GeneralUserGS_sf2_file', // no voice
  '0850_JCLive_sf2_file', // more a flute
  //'0850_SBLive_sf2',
  //'0850_SoundBlasterOld_sf2',
  '0851_FluidR3_GM_sf2_file',
  '0851_GeneralUserGS_sf2_file',
  '0851_JCLive_sf2_file',
  //'0851_SoundBlasterOld_sf2',

  // Lead 7 (fifths): Synth Lead
  '0860_Aspirin_sf2_file',
  '0860_Chaos_sf2_file',
  // '0860_FluidR3_GM_sf2_file', // loud and not fitting
  '0860_GeneralUserGS_sf2_file',
  '0860_JCLive_sf2_file',
  //'0860_SBLive_sf2',
  //'0860_SoundBlasterOld_sf2',
  '0861_Aspirin_sf2_file',
  // '0861_FluidR3_GM_sf2_file', // lout and not fitting
  //'0861_SoundBlasterOld_sf2',

  // Lead 8 (bass + lead): Synth Lead
  '0870_Aspirin_sf2_file',
  '0870_Chaos_sf2_file',
  '0870_FluidR3_GM_sf2_file',
  '0870_GeneralUserGS_sf2_file',
  '0870_JCLive_sf2_file',
  //'0870_SBLive_sf2',
  //'0870_SoundBlasterOld_sf2',
  // '0871_GeneralUserGS_sf2_file', // loud + detune
  //'0872_GeneralUserGS_sf2_file', // loud
  //'0873_GeneralUserGS_sf2_file', // loud

  // Pad 1 (new age): Synth Pad
  '0880_Aspirin_sf2_file',
  '0880_Chaos_sf2_file',
  '0880_FluidR3_GM_sf2_file',
  '0880_GeneralUserGS_sf2_file',
  '0880_JCLive_sf2_file',
  //'0880_SBLive_sf2',
  //'0880_SoundBlasterOld_sf2',
  '0881_Aspirin_sf2_file',
  '0881_FluidR3_GM_sf2_file',
  '0881_GeneralUserGS_sf2_file',
  //'0881_SoundBlasterOld_sf2',
  '0882_Aspirin_sf2_file', // staccato
  // '0882_FluidR3_GM_sf2_file', // missing
  '0882_GeneralUserGS_sf2_file',
  //'0883_GeneralUserGS_sf2_file', // missing
  // '0884_GeneralUserGS_sf2_file', // broken
  '0885_GeneralUserGS_sf2_file',
  //'0886_GeneralUserGS_sf2_file', // not a pad
  '0887_GeneralUserGS_sf2_file',
  //'0888_GeneralUserGS_sf2_file', // not a pad
  //'0889_GeneralUserGS_sf2_file', // not a pad

  // Pad 2 (warm): Synth Pad
  '0890_Aspirin_sf2_file',
  '0890_Chaos_sf2_file',
  '0890_FluidR3_GM_sf2_file',
  '0890_GeneralUserGS_sf2_file', // 1mb large
  '0890_JCLive_sf2_file',
  //'0890_SBLive_sf2',
  //'0890_SoundBlasterOld_sf2',
  '0891_Aspirin_sf2_file',
  '0891_FluidR3_GM_sf2_file',
  // '0891_GeneralUserGS_sf2_file', // noise

  // Pad 3 (polysynth): Synth Pad
  //'0900_Aspirin_sf2_file', // same as belo
  '0900_Chaos_sf2_file',
  '0900_FluidR3_GM_sf2_file',
  '0900_GeneralUserGS_sf2_file',
  '0900_JCLive_sf2_file', // a bit plucky for a pad
  //'0900_SBLive_sf2',
  //'0900_SoundBlasterOld_sf2',
  '0901_Aspirin_sf2_file',
  '0901_FluidR3_GM_sf2_file',
  '0901_GeneralUserGS_sf2_file',
  //'0901_SoundBlasterOld_sf2',

  // Pad 4 (choir): Synth Pad
  '0910_Aspirin_sf2_file',
  //'0910_Chaos_sf2_file', // +1oct
  '0910_FluidR3_GM_sf2_file',
  '0910_GeneralUserGS_sf2_file',
  '0910_JCLive_sf2_file',
  //'0910_SBLive_sf2',
  //'0910_SoundBlasterOld_sf2',
  // '0911_Aspirin_sf2_file', // fluty, crackles
  '0911_GeneralUserGS_sf2_file',
  '0911_JCLive_sf2_file', // the only choiry pad
  //'0911_SoundBlasterOld_sf2',

  // Pad 5 (bowed): Synth Pad
  '0920_Aspirin_sf2_file',
  //'0920_Chaos_sf2_file', // same as above
  //'0920_FluidR3_GM_sf2_file', // detuned?
  '0920_GeneralUserGS_sf2_file',
  '0920_JCLive_sf2_file',
  //'0920_SBLive_sf2',
  //'0920_SoundBlasterOld_sf2',
  '0921_Aspirin_sf2_file',
  '0921_GeneralUserGS_sf2_file',
  //'0921_SoundBlasterOld_sf2',

  // Pad 6 (metallic): Synth Pad
  '0930_Aspirin_sf2_file',
  '0930_Chaos_sf2_file',
  '0930_FluidR3_GM_sf2_file', // little crackles
  '0930_GeneralUserGS_sf2_file',
  // '0930_JCLive_sf2_file', // buggy zones: guitar / synth
  //'0930_SBLive_sf2',
  //'0930_SoundBlasterOld_sf2',
  '0931_Aspirin_sf2_file', // sitar
  '0931_FluidR3_GM_sf2_file',
  '0931_GeneralUserGS_sf2_file', // guitar
  //'0931_SoundBlasterOld_sf2',

  // Pad 7 (halo): Synth Pad
  // '0940_Aspirin_sf2_file', // same as below
  '0940_Chaos_sf2_file',
  '0940_FluidR3_GM_sf2_file',
  '0940_GeneralUserGS_sf2_file',
  '0940_JCLive_sf2_file',
  //'0940_SBLive_sf2',
  //'0940_SoundBlasterOld_sf2',
  '0941_Aspirin_sf2_file',
  '0941_FluidR3_GM_sf2_file',
  '0941_GeneralUserGS_sf2_file',
  '0941_JCLive_sf2_file',

  // Pad 8 (sweep): Synth Pad
  '0950_Aspirin_sf2_file',
  '0950_Chaos_sf2_file',
  '0950_FluidR3_GM_sf2_file',
  '0950_GeneralUserGS_sf2_file',
  '0950_JCLive_sf2_file',
  //'0950_SBLive_sf2',
  //'0950_SoundBlasterOld_sf2',
  '0951_FluidR3_GM_sf2_file',
  '0951_GeneralUserGS_sf2_file',

  // FX 1 (rain): Synth Effects
  //'0960_Aspirin_sf2_file', //mixed samples?
  '0960_Chaos_sf2_file', // pad?
  '0960_FluidR3_GM_sf2_file', // ???
  '0960_GeneralUserGS_sf2_file', // pad
  // '0960_JCLive_sf2_file', // mixed samples?
  //'0960_SBLive_sf2',
  //'0960_SoundBlasterOld_sf2',
  '0961_Aspirin_sf2_file',
  '0961_FluidR3_GM_sf2_file',
  // '0961_GeneralUserGS_sf2_file', // ?!?!
  //'0961_SoundBlasterOld_sf2',
  '0962_GeneralUserGS_sf2_file',

  // FX 2 (soundtrack): Synth Effects
  '0970_Aspirin_sf2_file',
  //'0970_Chaos_sf2_file', // wrong pitch
  '0970_FluidR3_GM_sf2_file',
  '0970_GeneralUserGS_sf2_file', // not looping..
  //'0970_JCLive_sf2_file', // wrong pitch
  //'0970_SBLive_sf2',
  //'0970_SoundBlasterOld_sf2',
  '0971_FluidR3_GM_sf2_file',
  '0971_GeneralUserGS_sf2_file',
  //'0971_SoundBlasterOld_sf2',

  // FX 3 (crystal): Synth Effects
  '0980_Aspirin_sf2_file',
  '0980_Chaos_sf2_file',
  // '0980_FluidR3_GM_sf2_file', // some notes are weird
  '0980_GeneralUserGS_sf2_file',
  '0980_JCLive_sf2_file',
  //'0980_SBLive_sf2',
  //'0980_SoundBlasterOld_sf2',
  '0981_Aspirin_sf2_file', // strings
  '0981_FluidR3_GM_sf2_file', // mallet
  '0981_GeneralUserGS_sf2_file',
  //'0981_SoundBlasterOld_sf2',
  '0982_GeneralUserGS_sf2_file',
  '0983_GeneralUserGS_sf2_file', // guitar
  '0984_GeneralUserGS_sf2_file',

  // FX 4 (atmosphere): Synth Effects
  '0990_Aspirin_sf2_file', // pad
  '0990_Chaos_sf2_file', // pad
  '0990_FluidR3_GM_sf2_file', // guitar
  '0990_GeneralUserGS_sf2_file', // guitar
  '0990_JCLive_sf2_file', // pad
  //'0990_SBLive_sf2',
  //'0990_SoundBlasterOld_sf2',
  '0991_Aspirin_sf2_file', // guitar
  '0991_FluidR3_GM_sf2_file', // pad
  '0991_GeneralUserGS_sf2_file', // pad
  '0991_JCLive_sf2_file', // guitar
  //'0991_SoundBlasterOld_sf2',
  '0992_FluidR3_GM_sf2_file', // pad
  '0992_JCLive_sf2_file', // guitar
  '0993_JCLive_sf2_file', // guitar
  '0994_JCLive_sf2_file', // guitar

  // FX 5 (brightness): Synth Effects
  '1000_Aspirin_sf2_file',
  '1000_Chaos_sf2_file',
  '1000_FluidR3_GM_sf2_file',
  '1000_GeneralUserGS_sf2_file',
  '1000_JCLive_sf2_file',
  //'1000_SBLive_sf2',
  //'1000_SoundBlasterOld_sf2',
  '1001_Aspirin_sf2_file',
  '1001_FluidR3_GM_sf2_file',
  '1001_GeneralUserGS_sf2_file',
  '1001_JCLive_sf2_file',
  //'1001_SoundBlasterOld_sf2',
  '1002_Aspirin_sf2_file',
  '1002_FluidR3_GM_sf2_file',
  '1002_GeneralUserGS_sf2_file',

  // FX 6 (goblins): Synth Effects
  '1010_Aspirin_sf2_file',
  '1010_Chaos_sf2_file',
  '1010_FluidR3_GM_sf2_file',
  '1010_GeneralUserGS_sf2_file',
  '1010_JCLive_sf2_file',
  //'1010_SBLive_sf2',
  //'1010_SoundBlasterOld_sf2',
  '1011_Aspirin_sf2_file',
  '1011_FluidR3_GM_sf2_file',
  '1011_JCLive_sf2_file',
  '1012_Aspirin_sf2_file',

  // FX 7 (echoes): Synth Effects
  '1020_Aspirin_sf2_file',
  '1020_Chaos_sf2_file',
  '1020_FluidR3_GM_sf2_file',
  '1020_GeneralUserGS_sf2_file',
  '1020_JCLive_sf2_file',
  //'1020_SBLive_sf2',
  //'1020_SoundBlasterOld_sf2',
  '1021_Aspirin_sf2_file',
  '1021_FluidR3_GM_sf2_file',
  '1021_GeneralUserGS_sf2_file',
  '1021_JCLive_sf2_file',
  //'1021_SoundBlasterOld_sf2',
  '1022_GeneralUserGS_sf2_file',

  // FX 8 (sci-fi): Synth Effects
  '1030_Aspirin_sf2_file',
  '1030_Chaos_sf2_file',
  '1030_FluidR3_GM_sf2_file',
  '1030_GeneralUserGS_sf2_file',
  '1030_JCLive_sf2_file',
  //'1030_SBLive_sf2',
  //'1030_SoundBlasterOld_sf2',
  '1031_Aspirin_sf2_file',
  '1031_FluidR3_GM_sf2_file',
  '1031_GeneralUserGS_sf2_file',
  //'1031_SoundBlasterOld_sf2',
  '1032_FluidR3_GM_sf2_file',

  // 'Sitar: Ethnic
  '1040_Aspirin_sf2_file',
  '1040_Chaos_sf2_file',
  '1040_FluidR3_GM_sf2_file',
  '1040_GeneralUserGS_sf2_file',
  '1040_JCLive_sf2_file',
  //'1040_SBLive_sf2',
  //'1040_SoundBlasterOld_sf2',
  '1041_FluidR3_GM_sf2_file',
  '1041_GeneralUserGS_sf2_file',

  // Banjo: Ethnic
  '1050_Aspirin_sf2_file',
  '1050_Chaos_sf2_file',
  '1050_FluidR3_GM_sf2_file',
  '1050_GeneralUserGS_sf2_file',
  '1050_JCLive_sf2_file',
  //'1050_SBLive_sf2',
  //'1050_SoundBlasterOld_sf2',
  '1051_GeneralUserGS_sf2_file',

  // Shamisen: Ethnic
  '1060_Aspirin_sf2_file',
  '1060_Chaos_sf2_file',
  '1060_FluidR3_GM_sf2_file',
  '1060_GeneralUserGS_sf2_file',
  '1060_JCLive_sf2_file',
  //'1060_SBLive_sf2',
  //'1060_SoundBlasterOld_sf2',
  '1061_FluidR3_GM_sf2_file',
  '1061_GeneralUserGS_sf2_file',
  //'1061_SoundBlasterOld_sf2',

  // Koto: Ethnic
  '1070_Aspirin_sf2_file',
  '1070_Chaos_sf2_file',
  '1070_FluidR3_GM_sf2_file',
  '1070_GeneralUserGS_sf2_file',
  '1070_JCLive_sf2_file',
  //'1070_SBLive_sf2',
  //'1070_SoundBlasterOld_sf2',
  '1071_FluidR3_GM_sf2_file',
  '1071_GeneralUserGS_sf2_file',
  '1072_GeneralUserGS_sf2_file',
  '1073_GeneralUserGS_sf2_file',

  // Kalimba: Ethnic
  '1080_Aspirin_sf2_file',
  '1080_Chaos_sf2_file',
  '1080_FluidR3_GM_sf2_file',
  '1080_GeneralUserGS_sf2_file',
  '1080_JCLive_sf2_file',
  //'1080_SBLive_sf2',
  //'1080_SoundBlasterOld_sf2',
  //'1081_SoundBlasterOld_sf2',

  // Bagpipe: Ethnic
  '1090_Aspirin_sf2_file',
  '1090_Chaos_sf2_file',
  '1090_FluidR3_GM_sf2_file',
  '1090_GeneralUserGS_sf2_file',
  '1090_JCLive_sf2_file',
  //'1090_SBLive_sf2',
  //'1090_SoundBlasterOld_sf2',
  //'1091_SoundBlasterOld_sf2',

  // Fiddle: Ethnic
  '1100_Aspirin_sf2_file',
  '1100_Chaos_sf2_file',
  '1100_FluidR3_GM_sf2_file',
  '1100_GeneralUserGS_sf2_file',
  '1100_JCLive_sf2_file',
  //'1100_SBLive_sf2',
  //'1100_SoundBlasterOld_sf2',
  '1101_Aspirin_sf2_file',
  '1101_FluidR3_GM_sf2_file',
  '1101_GeneralUserGS_sf2_file',
  '1102_GeneralUserGS_sf2_file',

  // Shanai: Ethnic
  '1110_Aspirin_sf2_file',
  '1110_Chaos_sf2_file',
  '1110_FluidR3_GM_sf2_file',
  '1110_GeneralUserGS_sf2_file',
  '1110_JCLive_sf2_file',
  //'1110_SBLive_sf2',
  //'1110_SoundBlasterOld_sf2',

  // Tinkle Bell: Percussive
  '1120_Aspirin_sf2_file',
  '1120_Chaos_sf2_file',
  '1120_FluidR3_GM_sf2_file',
  '1120_GeneralUserGS_sf2_file',
  '1120_JCLive_sf2_file',
  //'1120_SBLive_sf2',
  //'1120_SoundBlasterOld_sf2',
  //'1121_SoundBlasterOld_sf2',

  // Agogo: Percussive
  '1130_Aspirin_sf2_file',
  '1130_Chaos_sf2_file',
  '1130_FluidR3_GM_sf2_file',
  '1130_GeneralUserGS_sf2_file',
  '1130_JCLive_sf2_file',
  //'1130_SBLive_sf2',
  //'1130_SoundBlasterOld_sf2',
  '1131_FluidR3_GM_sf2_file',
  //'1131_SoundBlasterOld_sf2',

  // Steel Drums: Percussive
  '1140_Aspirin_sf2_file',
  '1140_Chaos_sf2_file',
  '1140_FluidR3_GM_sf2_file',
  '1140_GeneralUserGS_sf2_file',
  '1140_JCLive_sf2_file',
  //'1140_SBLive_sf2',
  //'1140_SoundBlasterOld_sf2',
  '1141_FluidR3_GM_sf2_file',

  // Woodblock: Percussive
  '1150_Aspirin_sf2_file',
  '1150_Chaos_sf2_file',
  '1150_FluidR3_GM_sf2_file',
  '1150_GeneralUserGS_sf2_file',
  '1150_JCLive_sf2_file',
  //'1150_SBLive_sf2',
  //'1150_SoundBlasterOld_sf2',
  '1151_FluidR3_GM_sf2_file',
  '1151_GeneralUserGS_sf2_file',
  '1152_FluidR3_GM_sf2_file',
  '1152_GeneralUserGS_sf2_file',

  // Taiko Drum: Percussive
  '1160_Aspirin_sf2_file',
  '1160_Chaos_sf2_file',
  '1160_FluidR3_GM_sf2_file',
  '1160_GeneralUserGS_sf2_file',
  '1160_JCLive_sf2_file',
  //'1160_SBLive_sf2',
  //'1160_SoundBlasterOld_sf2',
  '1161_FluidR3_GM_sf2_file',
  '1161_GeneralUserGS_sf2_file',
  //'1161_SoundBlasterOld_sf2',
  '1162_FluidR3_GM_sf2_file',
  '1162_GeneralUserGS_sf2_file',
  '1163_FluidR3_GM_sf2_file',

  // Melodic Tom: Percussive
  '1170_Aspirin_sf2_file',
  '1170_Chaos_sf2_file',
  '1170_FluidR3_GM_sf2_file',
  '1170_GeneralUserGS_sf2_file',
  '1170_JCLive_sf2_file',
  //'1170_SBLive_sf2',
  //'1170_SoundBlasterOld_sf2',
  '1171_FluidR3_GM_sf2_file',
  '1171_GeneralUserGS_sf2_file',
  '1172_FluidR3_GM_sf2_file',
  '1173_FluidR3_GM_sf2_file',

  // Synth Drum: Percussive
  '1180_Aspirin_sf2_file',
  '1180_Chaos_sf2_file',
  '1180_FluidR3_GM_sf2_file',
  '1180_GeneralUserGS_sf2_file',
  '1180_JCLive_sf2_file',
  //'1180_SBLive_sf2',
  //'1180_SoundBlasterOld_sf2',
  '1181_FluidR3_GM_sf2_file',
  '1181_GeneralUserGS_sf2_file',
  //'1181_SoundBlasterOld_sf2',

  // Reverse Cymbal: Percussive
  '1190_Aspirin_sf2_file',
  '1190_Chaos_sf2_file',
  '1190_FluidR3_GM_sf2_file',
  '1190_GeneralUserGS_sf2_file',
  '1190_JCLive_sf2_file',
  //'1190_SBLive_sf2',
  //'1190_SoundBlasterOld_sf2',
  '1191_GeneralUserGS_sf2_file',
  '1192_GeneralUserGS_sf2_file',
  '1193_GeneralUserGS_sf2_file',
  '1194_GeneralUserGS_sf2_file',

  // Guitar Fret Noise: Sound effects
  '1200_Aspirin_sf2_file',
  '1200_Chaos_sf2_file',
  '1200_FluidR3_GM_sf2_file',
  '1200_GeneralUserGS_sf2_file',
  '1200_JCLive_sf2_file',
  //'1200_SBLive_sf2',
  //'1200_SoundBlasterOld_sf2',
  '1201_Aspirin_sf2_file',
  '1201_GeneralUserGS_sf2_file',
  '1202_GeneralUserGS_sf2_file',

  // Breath Noise: Sound effects
  '1210_Aspirin_sf2_file',
  '1210_Chaos_sf2_file',
  '1210_FluidR3_GM_sf2_file',
  '1210_GeneralUserGS_sf2_file',
  '1210_JCLive_sf2_file',
  //'1210_SBLive_sf2',
  //'1210_SoundBlasterOld_sf2',
  '1211_Aspirin_sf2_file',
  '1211_GeneralUserGS_sf2_file',
  '1212_GeneralUserGS_sf2_file',

  // Seashore: Sound effects
  '1220_Aspirin_sf2_file',
  '1220_Chaos_sf2_file',
  '1220_FluidR3_GM_sf2_file',
  '1220_GeneralUserGS_sf2_file',
  '1220_JCLive_sf2_file',
  //'1220_SBLive_sf2',
  //'1220_SoundBlasterOld_sf2',
  '1221_Aspirin_sf2_file',
  '1221_GeneralUserGS_sf2_file',
  '1221_JCLive_sf2_file',
  '1222_Aspirin_sf2_file',
  '1222_GeneralUserGS_sf2_file',
  '1223_Aspirin_sf2_file',
  '1223_GeneralUserGS_sf2_file',
  '1224_Aspirin_sf2_file',
  '1224_GeneralUserGS_sf2_file',
  '1225_GeneralUserGS_sf2_file',
  '1226_GeneralUserGS_sf2_file',

  // Bird Tweet: Sound effects
  '1230_Aspirin_sf2_file',
  '1230_Chaos_sf2_file',
  '1230_FluidR3_GM_sf2_file',
  '1230_GeneralUserGS_sf2_file',
  '1230_JCLive_sf2_file',
  //'1230_SBLive_sf2',
  //'1230_SoundBlasterOld_sf2',
  '1231_Aspirin_sf2_file',
  '1231_GeneralUserGS_sf2_file',
  '1232_Aspirin_sf2_file',
  '1232_GeneralUserGS_sf2_file',
  '1233_GeneralUserGS_sf2_file',
  '1234_GeneralUserGS_sf2_file',

  // Telephone Ring: Sound effects
  '1240_Aspirin_sf2_file',
  '1240_Chaos_sf2_file',
  '1240_FluidR3_GM_sf2_file',
  '1240_GeneralUserGS_sf2_file',
  '1240_JCLive_sf2_file',
  //'1240_SBLive_sf2',
  //'1240_SoundBlasterOld_sf2',
  '1241_Aspirin_sf2_file',
  '1241_GeneralUserGS_sf2_file',
  '1242_Aspirin_sf2_file',
  '1242_GeneralUserGS_sf2_file',
  '1243_Aspirin_sf2_file',
  '1243_GeneralUserGS_sf2_file',
  '1244_Aspirin_sf2_file',
  '1244_GeneralUserGS_sf2_file',

  // Helicopter: Sound effects
  '1250_Aspirin_sf2_file',
  '1250_Chaos_sf2_file',
  '1250_FluidR3_GM_sf2_file',
  '1250_GeneralUserGS_sf2_file',
  '1250_JCLive_sf2_file',
  //'1250_SBLive_sf2',
  //'1250_SoundBlasterOld_sf2',
  '1251_Aspirin_sf2_file',
  '1251_FluidR3_GM_sf2_file',
  '1251_GeneralUserGS_sf2_file',
  '1252_Aspirin_sf2_file',
  '1252_FluidR3_GM_sf2_file',
  '1252_GeneralUserGS_sf2_file',
  '1253_Aspirin_sf2_file',
  '1253_GeneralUserGS_sf2_file',
  '1254_Aspirin_sf2_file',
  '1254_GeneralUserGS_sf2_file',
  '1255_Aspirin_sf2_file',
  '1255_GeneralUserGS_sf2_file',
  '1256_Aspirin_sf2_file',
  '1256_GeneralUserGS_sf2_file',
  '1257_Aspirin_sf2_file',
  '1257_GeneralUserGS_sf2_file',
  '1258_Aspirin_sf2_file',
  '1258_GeneralUserGS_sf2_file',
  '1259_GeneralUserGS_sf2_file',

  // Applause: Sound effects
  '1260_Aspirin_sf2_file',
  '1260_Chaos_sf2_file',
  '1260_FluidR3_GM_sf2_file',
  '1260_GeneralUserGS_sf2_file',
  '1260_JCLive_sf2_file',
  //'1260_SBLive_sf2',
  //'1260_SoundBlasterOld_sf2',
  '1261_Aspirin_sf2_file',
  '1261_GeneralUserGS_sf2_file',
  '1262_Aspirin_sf2_file',
  '1262_GeneralUserGS_sf2_file',
  '1263_Aspirin_sf2_file',
  '1263_GeneralUserGS_sf2_file',
  '1264_Aspirin_sf2_file',
  '1264_GeneralUserGS_sf2_file',
  '1265_Aspirin_sf2_file',
  '1265_GeneralUserGS_sf2_file',

  // Gunshot: Sound effects
  '1270_Aspirin_sf2_file',
  '1270_Chaos_sf2_file',
  '1270_FluidR3_GM_sf2_file',
  '1270_GeneralUserGS_sf2_file',
  '1270_JCLive_sf2_file',
  //'1270_SBLive_sf2',
  //'1270_SoundBlasterOld_sf2',
  '1271_Aspirin_sf2_file',
  '1271_GeneralUserGS_sf2_file',
  '1272_Aspirin_sf2_file',
  '1272_GeneralUserGS_sf2_file',
  '1273_GeneralUserGS_sf2_file',
  '1274_GeneralUserGS_sf2_file',
];

const drums = [
  ////'35_0_SBLive_sf2'
  '35_0_Chaos_sf2_file',
  '35_12_JCLive_sf2_file',
  '35_16_JCLive_sf2_file',
  '35_18_JCLive_sf2_file',
  '35_4_Chaos_sf2_file',
  //'36_0_SBLive_sf2',
  '36_12_JCLive_sf2_file',
  '36_16_JCLive_sf2_file',
  '36_18_JCLive_sf2_file',
  '36_4_Chaos_sf2_file',
  //'37_0_SBLive_sf2',
  '37_12_JCLive_sf2_file',
  '37_16_JCLive_sf2_file',
  '37_18_JCLive_sf2_file',
  '37_4_Chaos_sf2_file',
  //'38_0_SBLive_sf2',
  '38_12_JCLive_sf2_file',
  '38_16_JCLive_sf2_file',
  '38_18_JCLive_sf2_file',
  '38_4_Chaos_sf2_file',
  //'39_0_SBLive_sf2',
  '39_12_JCLive_sf2_file',
  '39_16_JCLive_sf2_file',
  '39_18_JCLive_sf2_file',
  '39_4_Chaos_sf2_file',
  //'40_0_SBLive_sf2',
  '40_12_JCLive_sf2_file',
  '40_16_JCLive_sf2_file',
  '40_18_JCLive_sf2_file',
  '40_4_Chaos_sf2_file',
  //'41_0_SBLive_sf2',
  '41_12_JCLive_sf2_file',
  '41_16_JCLive_sf2_file',
  '41_18_JCLive_sf2_file',
  '41_4_Chaos_sf2_file',
  //'42_0_SBLive_sf2',
  '42_12_JCLive_sf2_file',
  '42_16_JCLive_sf2_file',
  '42_18_JCLive_sf2_file',
  '42_4_Chaos_sf2_file',
  //'43_0_SBLive_sf2',
  '43_12_JCLive_sf2_file',
  '43_16_JCLive_sf2_file',
  '43_18_JCLive_sf2_file',
  '43_4_Chaos_sf2_file',
  //'44_0_SBLive_sf2',
  '44_12_JCLive_sf2_file',
  '44_16_JCLive_sf2_file',
  '44_18_JCLive_sf2_file',
  '44_4_Chaos_sf2_file',
  //'45_0_SBLive_sf2',
  '45_12_JCLive_sf2_file',
  '45_16_JCLive_sf2_file',
  '45_18_JCLive_sf2_file',
  '45_4_Chaos_sf2_file',
  //'46_0_SBLive_sf2',
  '46_12_JCLive_sf2_file',
  '46_16_JCLive_sf2_file',
  '46_18_JCLive_sf2_file',
  '46_4_Chaos_sf2_file',
  //'47_0_SBLive_sf2',
  '47_12_JCLive_sf2_file',
  '47_16_JCLive_sf2_file',
  '47_18_JCLive_sf2_file',
  '47_4_Chaos_sf2_file',
  //'48_0_SBLive_sf2',
  '48_12_JCLive_sf2_file',
  '48_16_JCLive_sf2_file',
  '48_18_JCLive_sf2_file',
  '48_4_Chaos_sf2_file',
  //'49_0_SBLive_sf2',
  '49_12_JCLive_sf2_file',
  '49_16_JCLive_sf2_file',
  '49_18_JCLive_sf2_file',
  '49_4_Chaos_sf2_file',
  //'50_0_SBLive_sf2',
  '50_12_JCLive_sf2_file',
  '50_16_JCLive_sf2_file',
  '50_18_JCLive_sf2_file',
  '50_4_Chaos_sf2_file',
  //'51_0_SBLive_sf2',
  '51_12_JCLive_sf2_file',
  '51_16_JCLive_sf2_file',
  '51_18_JCLive_sf2_file',
  '51_4_Chaos_sf2_file',
  //'52_0_SBLive_sf2',
  '52_12_JCLive_sf2_file',
  '52_16_JCLive_sf2_file',
  '52_18_JCLive_sf2_file',
  '52_4_Chaos_sf2_file',
  //'53_0_SBLive_sf2',
  '53_12_JCLive_sf2_file',
  '53_16_JCLive_sf2_file',
  '53_18_JCLive_sf2_file',
  '53_4_Chaos_sf2_file',
  //'54_0_SBLive_sf2',
  '54_12_JCLive_sf2_file',
  '54_16_JCLive_sf2_file',
  '54_18_JCLive_sf2_file',
  '54_4_Chaos_sf2_file',
  //'55_0_SBLive_sf2',
  '55_12_JCLive_sf2_file',
  '55_16_JCLive_sf2_file',
  '55_18_JCLive_sf2_file',
  '55_4_Chaos_sf2_file',
  //'56_0_SBLive_sf2',
  '56_12_JCLive_sf2_file',
  '56_16_JCLive_sf2_file',
  '56_18_JCLive_sf2_file',
  '56_4_Chaos_sf2_file',
  //'57_0_SBLive_sf2',
  '57_12_JCLive_sf2_file',
  '57_16_JCLive_sf2_file',
  '57_18_JCLive_sf2_file',
  '57_4_Chaos_sf2_file',
  //'58_0_SBLive_sf2',
  '58_12_JCLive_sf2_file',
  '58_16_JCLive_sf2_file',
  '58_18_JCLive_sf2_file',
  '58_4_Chaos_sf2_file',
  //'59_0_SBLive_sf2',
  '59_12_JCLive_sf2_file',
  '59_16_JCLive_sf2_file',
  '59_18_JCLive_sf2_file',
  '59_4_Chaos_sf2_file',
  //'60_0_SBLive_sf2',
  '60_12_JCLive_sf2_file',
  '60_16_JCLive_sf2_file',
  '60_18_JCLive_sf2_file',
  '60_4_Chaos_sf2_file',
  //'61_0_SBLive_sf2',
  '61_12_JCLive_sf2_file',
  '61_16_JCLive_sf2_file',
  '61_18_JCLive_sf2_file',
  '61_4_Chaos_sf2_file',
  //'62_0_SBLive_sf2',
  '62_12_JCLive_sf2_file',
  '62_16_JCLive_sf2_file',
  '62_18_JCLive_sf2_file',
  '62_4_Chaos_sf2_file',
  //'63_0_SBLive_sf2',
  '63_12_JCLive_sf2_file',
  '63_16_JCLive_sf2_file',
  '63_18_JCLive_sf2_file',
  '63_4_Chaos_sf2_file',
  //'64_0_SBLive_sf2',
  '64_12_JCLive_sf2_file',
  '64_16_JCLive_sf2_file',
  '64_18_JCLive_sf2_file',
  '64_4_Chaos_sf2_file',
  //'65_0_SBLive_sf2',
  '65_12_JCLive_sf2_file',
  '65_16_JCLive_sf2_file',
  '65_18_JCLive_sf2_file',
  '65_4_Chaos_sf2_file',
  //'66_0_SBLive_sf2',
  '66_12_JCLive_sf2_file',
  '66_16_JCLive_sf2_file',
  '66_18_JCLive_sf2_file',
  '66_4_Chaos_sf2_file',
  //'67_0_SBLive_sf2',
  '67_12_JCLive_sf2_file',
  '67_16_JCLive_sf2_file',
  '67_18_JCLive_sf2_file',
  '67_4_Chaos_sf2_file',
  //'68_0_SBLive_sf2',
  '68_12_JCLive_sf2_file',
  '68_16_JCLive_sf2_file',
  '68_18_JCLive_sf2_file',
  '68_4_Chaos_sf2_file',
  //'69_0_SBLive_sf2',
  '69_12_JCLive_sf2_file',
  '69_16_JCLive_sf2_file',
  '69_18_JCLive_sf2_file',
  '69_4_Chaos_sf2_file',
  //'70_0_SBLive_sf2',
  '70_12_JCLive_sf2_file',
  '70_16_JCLive_sf2_file',
  '70_18_JCLive_sf2_file',
  '70_4_Chaos_sf2_file',
  //'71_0_SBLive_sf2',
  '71_12_JCLive_sf2_file',
  '71_16_JCLive_sf2_file',
  '71_18_JCLive_sf2_file',
  '71_4_Chaos_sf2_file',
  //'72_0_SBLive_sf2',
  '72_12_JCLive_sf2_file',
  '72_16_JCLive_sf2_file',
  '72_18_JCLive_sf2_file',
  '72_4_Chaos_sf2_file',
  //'73_0_SBLive_sf2',
  '73_12_JCLive_sf2_file',
  '73_16_JCLive_sf2_file',
  '73_18_JCLive_sf2_file',
  '73_4_Chaos_sf2_file',
  //'74_0_SBLive_sf2',
  '74_12_JCLive_sf2_file',
  '74_16_JCLive_sf2_file',
  '74_18_JCLive_sf2_file',
  '74_4_Chaos_sf2_file',
  //'75_0_SBLive_sf2',
  '75_12_JCLive_sf2_file',
  '75_16_JCLive_sf2_file',
  '75_18_JCLive_sf2_file',
  '75_4_Chaos_sf2_file',
  //'76_0_SBLive_sf2',
  '76_12_JCLive_sf2_file',
  '76_16_JCLive_sf2_file',
  '76_18_JCLive_sf2_file',
  '76_4_Chaos_sf2_file',
  //'77_0_SBLive_sf2',
  '77_12_JCLive_sf2_file',
  '77_16_JCLive_sf2_file',
  '77_18_JCLive_sf2_file',
  '77_4_Chaos_sf2_file',
  //'78_0_SBLive_sf2',
  '78_12_JCLive_sf2_file',
  '78_16_JCLive_sf2_file',
  '78_18_JCLive_sf2_file',
  '78_4_Chaos_sf2_file',
  //'79_0_SBLive_sf2',
  '79_12_JCLive_sf2_file',
  '79_16_JCLive_sf2_file',
  '79_18_JCLive_sf2_file',
  '79_4_Chaos_sf2_file',
  //'80_0_SBLive_sf2',
  '80_12_JCLive_sf2_file',
  '80_16_JCLive_sf2_file',
  '80_18_JCLive_sf2_file',
  '80_4_Chaos_sf2_file',
  //'81_0_SBLive_sf2',
  '81_12_JCLive_sf2_file',
  '81_16_JCLive_sf2_file',
  '81_18_JCLive_sf2_file',
  '81_4_Chaos_sf2_file',
];

// see https://www.midi.org/specifications-old/item/gm-level-1-sound-set
const instrumentNames = [];
instrumentNames[0] = 'Acoustic Grand Piano: Piano';
instrumentNames[1] = 'Bright Acoustic Piano: Piano';
instrumentNames[2] = 'Electric Grand Piano: Piano';
instrumentNames[3] = 'Honky-tonk Piano: Piano';
instrumentNames[4] = 'Electric Piano 1: Piano';
instrumentNames[5] = 'Electric Piano 2: Piano';
instrumentNames[6] = 'Harpsichord: Piano';
instrumentNames[7] = 'Clavinet: Piano';
instrumentNames[8] = 'Celesta: Chromatic Percussion';
instrumentNames[9] = 'Glockenspiel: Chromatic Percussion';
instrumentNames[10] = 'Music Box: Chromatic Percussion';
instrumentNames[11] = 'Vibraphone: Chromatic Percussion';
instrumentNames[12] = 'Marimba: Chromatic Percussion'; // out of tune
instrumentNames[13] = 'Xylophone: Chromatic Percussion';
instrumentNames[14] = 'Tubular Bells: Chromatic Percussion';
instrumentNames[15] = 'Dulcimer: Chromatic Percussion';
instrumentNames[16] = 'Drawbar Organ: Organ';
instrumentNames[17] = 'Percussive Organ: Organ';
instrumentNames[18] = 'Rock Organ: Organ';
instrumentNames[19] = 'Church Organ: Organ';
instrumentNames[20] = 'Reed Organ: Organ';
instrumentNames[21] = 'Accordion: Organ'; // some notes are one octave up
instrumentNames[22] = 'Harmonica: Organ';
instrumentNames[23] = 'Tango Accordion: Organ';
instrumentNames[24] = 'Acoustic Guitar (nylon): Guitar';
instrumentNames[25] = 'Acoustic Guitar (steel): Guitar';
instrumentNames[26] = 'Electric Guitar (jazz): Guitar';
instrumentNames[27] = 'Electric Guitar (clean): Guitar';
instrumentNames[28] = 'Electric Guitar (muted): Guitar';
instrumentNames[29] = 'Overdriven Guitar: Guitar';
instrumentNames[30] = 'Distortion Guitar: Guitar';
instrumentNames[31] = 'Guitar Harmonics: Guitar';
instrumentNames[32] = 'Acoustic Bass: Bass';
instrumentNames[33] = 'Electric Bass (finger): Bass';
instrumentNames[34] = 'Electric Bass (pick): Bass';
instrumentNames[35] = 'Fretless Bass: Bass';
instrumentNames[36] = 'Slap Bass 1: Bass';
instrumentNames[37] = 'Slap Bass 2: Bass';
instrumentNames[38] = 'Synth Bass 1: Bass'; // not found?
instrumentNames[39] = 'Synth Bass 2: Bass';
instrumentNames[40] = 'Violin: Strings';
instrumentNames[41] = 'Viola: Strings';
instrumentNames[42] = 'Cello: Strings';
instrumentNames[43] = 'Contrabass: Strings';
instrumentNames[44] = 'Tremolo Strings: Strings';
instrumentNames[45] = 'Pizzicato Strings: Strings';
instrumentNames[46] = 'Orchestral Harp: Strings';
instrumentNames[47] = 'Timpani: Strings';
instrumentNames[48] = 'String Ensemble 1: Ensemble';
instrumentNames[49] = 'String Ensemble 2: Ensemble';
instrumentNames[50] = 'Synth Strings 1: Ensemble';
instrumentNames[51] = 'Synth Strings 2: Ensemble';
instrumentNames[52] = 'Choir Aahs: Ensemble';
instrumentNames[53] = 'Voice Oohs: Ensemble';
instrumentNames[54] = 'Synth Choir: Ensemble';
instrumentNames[55] = 'Orchestra Hit: Ensemble';
instrumentNames[56] = 'Trumpet: Brass';
instrumentNames[57] = 'Trombone: Brass';
instrumentNames[58] = 'Tuba: Brass';
instrumentNames[59] = 'Muted Trumpet: Brass';
instrumentNames[60] = 'French Horn: Brass';
instrumentNames[61] = 'Brass Section: Brass';
instrumentNames[62] = 'Synth Brass 1: Brass';
instrumentNames[63] = 'Synth Brass 2: Brass';
instrumentNames[64] = 'Soprano Sax: Reed'; // out of time?
instrumentNames[65] = 'Alto Sax: Reed';
instrumentNames[66] = 'Tenor Sax: Reed';
instrumentNames[67] = 'Baritone Sax: Reed';
instrumentNames[68] = 'Oboe: Reed';
instrumentNames[69] = 'English Horn: Reed';
instrumentNames[70] = 'Bassoon: Reed';
instrumentNames[71] = 'Clarinet: Reed';
instrumentNames[72] = 'Piccolo: Pipe';
instrumentNames[73] = 'Flute: Pipe';
instrumentNames[74] = 'Recorder: Pipe'; // out of time?
instrumentNames[75] = 'Pan Flute: Pipe';
instrumentNames[76] = 'Blown bottle: Pipe';
instrumentNames[77] = 'Shakuhachi: Pipe';
instrumentNames[78] = 'Whistle: Pipe';
instrumentNames[79] = 'Ocarina: Pipe';
instrumentNames[80] = 'Lead 1 (square): Synth Lead';
instrumentNames[81] = 'Lead 2 (sawtooth): Synth Lead';
instrumentNames[82] = 'Lead 3 (calliope): Synth Lead';
instrumentNames[83] = 'Lead 4 (chiff): Synth Lead';
instrumentNames[84] = 'Lead 5 (charang): Synth Lead';
instrumentNames[85] = 'Lead 6 (voice): Synth Lead'; // terranigma!
instrumentNames[86] = 'Lead 7 (fifths): Synth Lead';
instrumentNames[87] = 'Lead 8 (bass + lead): Synth Lead';
instrumentNames[88] = 'Pad 1 (new age): Synth Pad';
instrumentNames[89] = 'Pad 2 (warm): Synth Pad';
instrumentNames[90] = 'Pad 3 (polysynth): Synth Pad';
instrumentNames[91] = 'Pad 4 (choir): Synth Pad';
instrumentNames[92] = 'Pad 5 (bowed): Synth Pad';
instrumentNames[93] = 'Pad 6 (metallic): Synth Pad';
instrumentNames[94] = 'Pad 7 (halo): Synth Pad';
instrumentNames[95] = 'Pad 8 (sweep): Synth Pad';
instrumentNames[96] = 'FX 1 (rain): Synth Effects';
instrumentNames[97] = 'FX 2 (soundtrack): Synth Effects';
instrumentNames[98] = 'FX 3 (crystal): Synth Effects';
instrumentNames[99] = 'FX 4 (atmosphere): Synth Effects';
instrumentNames[100] = 'FX 5 (brightness): Synth Effects';
instrumentNames[101] = 'FX 6 (goblins): Synth Effects';
instrumentNames[102] = 'FX 7 (echoes): Synth Effects';
instrumentNames[103] = 'FX 8 (sci-fi): Synth Effects';
instrumentNames[104] = 'Sitar: Ethnic';
instrumentNames[105] = 'Banjo: Ethnic';
instrumentNames[106] = 'Shamisen: Ethnic';
instrumentNames[107] = 'Koto: Ethnic';
instrumentNames[108] = 'Kalimba: Ethnic';
instrumentNames[109] = 'Bagpipe: Ethnic';
instrumentNames[110] = 'Fiddle: Ethnic';
instrumentNames[111] = 'Shanai: Ethnic';
instrumentNames[112] = 'Tinkle Bell: Percussive';
instrumentNames[113] = 'Agogo: Percussive';
instrumentNames[114] = 'Steel Drums: Percussive';
instrumentNames[115] = 'Woodblock: Percussive';
instrumentNames[116] = 'Taiko Drum: Percussive';
instrumentNames[117] = 'Melodic Tom: Percussive';
instrumentNames[118] = 'Synth Drum: Percussive';
instrumentNames[119] = 'Reverse Cymbal: Percussive';
instrumentNames[120] = 'Guitar Fret Noise: Sound effects';
instrumentNames[121] = 'Breath Noise: Sound effects';
instrumentNames[122] = 'Seashore: Sound effects';
instrumentNames[123] = 'Bird Tweet: Sound effects';
instrumentNames[124] = 'Telephone Ring: Sound effects';
instrumentNames[125] = 'Helicopter: Sound effects';
instrumentNames[126] = 'Applause: Sound effects';
instrumentNames[127] = 'Gunshot: Sound effects';

const list = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  drums,
  instrumentNames,
  instruments
}, Symbol.toStringTag, { value: 'Module' }));

var SoundFont2 = {exports: {}};

var hasRequiredSoundFont2;

function requireSoundFont2 () {
	if (hasRequiredSoundFont2) return SoundFont2.exports;
	hasRequiredSoundFont2 = 1;
	(function (module, exports) {
		!function(e,t){module.exports=t();}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:false,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=true,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:true,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:true});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:true,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/index.ts")}({"./src/chunk.ts":
		/*!**********************!*\
		  !*** ./src/chunk.ts ***!
		  \**********************/
		/*! exports provided: SF2Chunk */function(e,t,r){r.r(t),r.d(t,"SF2Chunk",function(){return f});var n=r(/*! ./riff */"./src/riff/index.ts"),o=r(/*! ./constants */"./src/constants.ts"),i=r(/*! ./chunks */"./src/chunks/index.ts");function s(e){return (s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false,n.configurable=true,"value"in n&&(n.writable=true),Object.defineProperty(e,n.key,n);}}function a(e){return (a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return (c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(undefined===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e){var r,n,o,i,u,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=!(o=a(t).call(this,e.id,e.length,e.buffer,e.subChunks))||"object"!==s(o)&&"function"!=typeof o?l(n):o,i=l(l(r)),c=undefined,(u="subChunks")in i?Object.defineProperty(i,u,{value:c,enumerable:true,configurable:true,writable:true}):i[u]=c,r.subChunks=e.subChunks.map(function(e){return new t(e)}),r}var r,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}}),t&&c(e,t);}(t,n["RIFFChunk"]),r=t,(f=[{key:"getMetaData",value:function(){if("LIST"!==this.id)throw new n.ParseError("Unexpected chunk ID","'LIST'","'".concat(this.id,"'"));var e=this.subChunks.reduce(function(e,t){if("ifil"===t.id||"iver"===t.id){if(t.length!==o.SF_VERSION_LENGTH)throw new n.ParseError("Invalid size for the '".concat(t.id,"' sub-chunk"));e[t.id]="".concat(t.getInt16(),".").concat(t.getInt16(2));}else e[t.id]=t.getString();return e},{});if(!e.ifil)throw new n.ParseError("Missing required 'ifil' sub-chunk");if(!e.INAM)throw new n.ParseError("Missing required 'INAM' sub-chunk");return {version:e.ifil,soundEngine:e.isng||"EMU8000",name:e.INAM,rom:e.irom,romVersion:e.iver,creationDate:e.ICRD,author:e.IENG,product:e.IPRD,copyright:e.ICOP,comments:e.ICMT,createdBy:e.ISFT}}},{key:"getSampleData",value:function(){if("LIST"!==this.id)throw new n.ParseError("Unexpected chunk ID","'LIST'","'".concat(this.id,"'"));var e=this.subChunks[0];if("smpl"!==e.id)throw new n.ParseError("Invalid chunk signature","'smpl'","'".concat(e.id,"'"));return e.buffer}},{key:"getPresetData",value:function(){if("LIST"!==this.id)throw new n.ParseError("Unexpected chunk ID","'LIST'","'".concat(this.id,"'"));return {presetHeaders:Object(i.getPresetHeaders)(this.subChunks[0]),presetZones:Object(i.getZones)(this.subChunks[1],"pbag"),presetModulators:Object(i.getModulators)(this.subChunks[2],"pmod"),presetGenerators:Object(i.getGenerators)(this.subChunks[3],"pgen"),instrumentHeaders:Object(i.getInstrumentHeaders)(this.subChunks[4]),instrumentZones:Object(i.getZones)(this.subChunks[5],"ibag"),instrumentModulators:Object(i.getModulators)(this.subChunks[6],"imod"),instrumentGenerators:Object(i.getGenerators)(this.subChunks[7],"igen"),sampleHeaders:Object(i.getSampleHeaders)(this.subChunks[8])}}}])&&u(r.prototype,f),t}();},"./src/chunks/generators.ts":
		/*!**********************************!*\
		  !*** ./src/chunks/generators.ts ***!
		  \**********************************/
		/*! exports provided: getGenerators */function(e,t,r){r.r(t),r.d(t,"getGenerators",function(){return c});var n=r(/*! ~/riff */"./src/riff/index.ts"),o=r(/*! ~/types */"./src/types/index.ts"),i=r(/*! ~/constants */"./src/constants.ts"),s=[o.GeneratorType.StartAddrsOffset,o.GeneratorType.EndAddrsOffset,o.GeneratorType.StartLoopAddrsOffset,o.GeneratorType.EndLoopAddrsOffset,o.GeneratorType.StartAddrsCoarseOffset,o.GeneratorType.EndAddrsCoarseOffset,o.GeneratorType.StartLoopAddrsCoarseOffset,o.GeneratorType.KeyNum,o.GeneratorType.Velocity,o.GeneratorType.EndLoopAddrsCoarseOffset,o.GeneratorType.SampleModes,o.GeneratorType.ExclusiveClass,o.GeneratorType.OverridingRootKey],u=[o.GeneratorType.Unused1,o.GeneratorType.Unused2,o.GeneratorType.Unused3,o.GeneratorType.Unused4,o.GeneratorType.Reserved1,o.GeneratorType.Reserved2,o.GeneratorType.Reserved3],a=[o.GeneratorType.KeyRange,o.GeneratorType.VelRange],c=function(e,t){if(e.id!==t)throw new n.ParseError("Unexpected chunk ID","'".concat(t,"'"),"'".concat(e.id,"'"));if(e.length%i.SF_GENERATOR_SIZE)throw new n.ParseError("Invalid size for the '".concat(t,"' sub-chunk"));return e.iterate(function(e){var r=e.getInt16();return o.GeneratorType[r]?"pgen"===t&&s.includes(r)?null:"igen"===t&&u.includes(r)?null:a.includes(r)?{id:r,range:{lo:e.getByte(),hi:e.getByte()}}:{id:r,value:e.getInt16BE()}:null})};},"./src/chunks/index.ts":
		/*!*****************************!*\
		  !*** ./src/chunks/index.ts ***!
		  \*****************************/
		/*! exports provided: getGenerators, getModulators, getZones, getItemsInZone, getInstrumentHeaders, getPresetHeaders, getSampleHeaders */function(e,t,r){r.r(t);var n=r(/*! ./instruments */"./src/chunks/instruments/index.ts");r.d(t,"getInstrumentHeaders",function(){return n.getInstrumentHeaders});var o=r(/*! ./presets */"./src/chunks/presets/index.ts");r.d(t,"getPresetHeaders",function(){return o.getPresetHeaders});var i=r(/*! ./samples */"./src/chunks/samples/index.ts");r.d(t,"getSampleHeaders",function(){return i.getSampleHeaders});var s=r(/*! ./generators */"./src/chunks/generators.ts");r.d(t,"getGenerators",function(){return s.getGenerators});var u=r(/*! ./modulators */"./src/chunks/modulators.ts");r.d(t,"getModulators",function(){return u.getModulators});var a=r(/*! ./zones */"./src/chunks/zones.ts");r.d(t,"getZones",function(){return a.getZones}),r.d(t,"getItemsInZone",function(){return a.getItemsInZone});},"./src/chunks/instruments/headers.ts":
		/*!*******************************************!*\
		  !*** ./src/chunks/instruments/headers.ts ***!
		  \*******************************************/
		/*! exports provided: getInstrumentHeaders */function(e,t,r){r.r(t),r.d(t,"getInstrumentHeaders",function(){return i});var n=r(/*! ~/riff */"./src/riff/index.ts"),o=r(/*! ~/constants */"./src/constants.ts"),i=function(e){if("inst"!==e.id)throw new n.ParseError("Unexpected chunk ID","'inst'","'".concat(e.id,"'"));if(e.length%o.SF_INSTRUMENT_HEADER_SIZE)throw new n.ParseError("Invalid size for the 'inst' sub-chunk");return e.iterate(function(e){return {name:e.getString(),bagIndex:e.getInt16()}})};},"./src/chunks/instruments/index.ts":
		/*!*****************************************!*\
		  !*** ./src/chunks/instruments/index.ts ***!
		  \*****************************************/
		/*! exports provided: getInstrumentHeaders */function(e,t,r){r.r(t);var n=r(/*! ./headers */"./src/chunks/instruments/headers.ts");r.d(t,"getInstrumentHeaders",function(){return n.getInstrumentHeaders});},"./src/chunks/modulators.ts":
		/*!**********************************!*\
		  !*** ./src/chunks/modulators.ts ***!
		  \**********************************/
		/*! exports provided: getModulators */function(e,t,r){r.r(t),r.d(t,"getModulators",function(){return s});var n=r(/*! ~/riff */"./src/riff/index.ts"),o=r(/*! ~/constants */"./src/constants.ts"),i=function(e){return {type:e>>10&63,polarity:e>>9&1,direction:e>>8&1,palette:e>>7&1,index:127&e}},s=function(e,t){if(e.id!==t)throw new n.ParseError("Unexpected chunk ID","'".concat(t,"'"),"'".concat(e.id,"'"));if(e.length%o.SF_MODULATOR_SIZE)throw new n.ParseError("Invalid size for the '".concat(t,"' sub-chunk"));return e.iterate(function(e){return {source:i(e.getInt16BE()),id:e.getInt16BE(),value:e.getInt16BE(),valueSource:i(e.getInt16BE()),transform:e.getInt16BE()}})};},"./src/chunks/presets/headers.ts":
		/*!***************************************!*\
		  !*** ./src/chunks/presets/headers.ts ***!
		  \***************************************/
		/*! exports provided: getPresetHeaders */function(e,t,r){r.r(t),r.d(t,"getPresetHeaders",function(){return i});var n=r(/*! ~/riff */"./src/riff/index.ts"),o=r(/*! ~/constants */"./src/constants.ts"),i=function(e){if("phdr"!==e.id)throw new n.ParseError("Invalid chunk ID","'phdr'","'".concat(e.id,"'"));if(e.length%o.SF_PRESET_HEADER_SIZE)throw new n.ParseError("Invalid size for the 'phdr' sub-chunk");return e.iterate(function(e){return {name:e.getString(),preset:e.getInt16(),bank:e.getInt16(),bagIndex:e.getInt16(),library:e.getUInt32(),genre:e.getUInt32(),morphology:e.getUInt32()}})};},"./src/chunks/presets/index.ts":
		/*!*************************************!*\
		  !*** ./src/chunks/presets/index.ts ***!
		  \*************************************/
		/*! exports provided: getPresetHeaders */function(e,t,r){r.r(t);var n=r(/*! ./headers */"./src/chunks/presets/headers.ts");r.d(t,"getPresetHeaders",function(){return n.getPresetHeaders});},"./src/chunks/samples/headers.ts":
		/*!***************************************!*\
		  !*** ./src/chunks/samples/headers.ts ***!
		  \***************************************/
		/*! exports provided: getSampleHeaders */function(e,t,r){r.r(t),r.d(t,"getSampleHeaders",function(){return i});var n=r(/*! ~/riff */"./src/riff/index.ts"),o=r(/*! ~/constants */"./src/constants.ts"),i=function(e){if("shdr"!==e.id)throw new n.ParseError("Unexpected chunk ID","'shdr'","'".concat(e.id,"'"));if(e.length%o.SF_SAMPLE_HEADER_SIZE)throw new n.ParseError("Invalid size for the 'shdr' sub-chunk");return e.iterate(function(e){return {name:e.getString(),start:e.getUInt32(),end:e.getUInt32(),startLoop:e.getUInt32(),endLoop:e.getUInt32(),sampleRate:e.getUInt32(),originalPitch:e.getByte(),pitchCorrection:e.getChar(),link:e.getInt16(),type:e.getInt16()}})};},"./src/chunks/samples/index.ts":
		/*!*************************************!*\
		  !*** ./src/chunks/samples/index.ts ***!
		  \*************************************/
		/*! exports provided: getSampleHeaders */function(e,t,r){r.r(t);var n=r(/*! ./headers */"./src/chunks/samples/headers.ts");r.d(t,"getSampleHeaders",function(){return n.getSampleHeaders});},"./src/chunks/zones.ts":
		/*!*****************************!*\
		  !*** ./src/chunks/zones.ts ***!
		  \*****************************/
		/*! exports provided: getZones, getItemsInZone */function(e,t,r){r.r(t),r.d(t,"getZones",function(){return s}),r.d(t,"getItemsInZone",function(){return u});var n=r(/*! ~/riff */"./src/riff/index.ts"),o=r(/*! ~/constants */"./src/constants.ts"),i=r(/*! ~/types */"./src/types/index.ts"),s=function(e,t){if(e.id!==t)throw new n.ParseError("Unexpected chunk ID","'".concat(t,"'"),"'".concat(e.id,"'"));if(e.length%o.SF_BAG_SIZE)throw new n.ParseError("Invalid size for the '".concat(t,"' sub-chunk"));return e.iterate(function(e){return {generatorIndex:e.getInt16(),modulatorIndex:e.getInt16()}})},u=function(e,t,r,n,o,s){for(var u=[],l=0;l<e.length;l++){for(var f=e[l],d=e[l+1],p=f.bagIndex,h=d?d.bagIndex:t.length,y=[],v=undefined,g=p;g<h;g++){var E=a(g,t,r),m=c(g,t,n),b=m[i.GeneratorType.KeyRange]&&m[i.GeneratorType.KeyRange].range,S=m[s];if(S){var T=o[S.value];T&&y.push({keyRange:b,modulators:E,generators:m,reference:T});}else g-p==0&&(v={keyRange:b,modulators:E,generators:m});}u.push({header:f,globalZone:v,zones:y});}return u},a=function(e,t,r){var n=t[e],o=t[e+1],i=n.modulatorIndex,s=o?o.modulatorIndex:t.length;return l(i,s,r)},c=function(e,t,r){var n=t[e],o=t[e+1],i=n.generatorIndex,s=o?o.generatorIndex:t.length;return l(i,s,r)},l=function(e,t,r){for(var n={},o=e;o<t;o++){var i=r[o];i&&(n[i.id]=i);}return n};},"./src/constants.ts":
		/*!**************************!*\
		  !*** ./src/constants.ts ***!
		  \**************************/
		/*! exports provided: SF_VERSION_LENGTH, SF_PRESET_HEADER_SIZE, SF_BAG_SIZE, SF_MODULATOR_SIZE, SF_GENERATOR_SIZE, SF_INSTRUMENT_HEADER_SIZE, SF_SAMPLE_HEADER_SIZE, DEFAULT_SAMPLE_RATE */function(e,t,r){r.r(t),r.d(t,"SF_VERSION_LENGTH",function(){return n}),r.d(t,"SF_PRESET_HEADER_SIZE",function(){return o}),r.d(t,"SF_BAG_SIZE",function(){return i}),r.d(t,"SF_MODULATOR_SIZE",function(){return s}),r.d(t,"SF_GENERATOR_SIZE",function(){return u}),r.d(t,"SF_INSTRUMENT_HEADER_SIZE",function(){return a}),r.d(t,"SF_SAMPLE_HEADER_SIZE",function(){return c}),r.d(t,"DEFAULT_SAMPLE_RATE",function(){return l});var n=4,o=38,i=4,s=10,u=4,a=22,c=46,l=22050;},"./src/index.ts":
		/*!**********************!*\
		  !*** ./src/index.ts ***!
		  \**********************/
		/*! no static exports found */function(e,t,r){r.r(t);var n=r(/*! ./types */"./src/types/index.ts");for(var o in n)"default"!==o&&function(e){r.d(t,e,function(){return n[e]});}(o);var i=r(/*! ./chunk */"./src/chunk.ts");r.d(t,"SF2Chunk",function(){return i.SF2Chunk});var s=r(/*! ./constants */"./src/constants.ts");r.d(t,"SF_VERSION_LENGTH",function(){return s.SF_VERSION_LENGTH}),r.d(t,"SF_PRESET_HEADER_SIZE",function(){return s.SF_PRESET_HEADER_SIZE}),r.d(t,"SF_BAG_SIZE",function(){return s.SF_BAG_SIZE}),r.d(t,"SF_MODULATOR_SIZE",function(){return s.SF_MODULATOR_SIZE}),r.d(t,"SF_GENERATOR_SIZE",function(){return s.SF_GENERATOR_SIZE}),r.d(t,"SF_INSTRUMENT_HEADER_SIZE",function(){return s.SF_INSTRUMENT_HEADER_SIZE}),r.d(t,"SF_SAMPLE_HEADER_SIZE",function(){return s.SF_SAMPLE_HEADER_SIZE}),r.d(t,"DEFAULT_SAMPLE_RATE",function(){return s.DEFAULT_SAMPLE_RATE});var u=r(/*! ./soundFont2 */"./src/soundFont2.ts");r.d(t,"SoundFont2",function(){return u.SoundFont2});},"./src/riff/chunkIterator.ts":
		/*!***********************************!*\
		  !*** ./src/riff/chunkIterator.ts ***!
		  \***********************************/
		/*! exports provided: ChunkIterator */function(e,t,r){r.r(t),r.d(t,"ChunkIterator",function(){return s});var n=r(/*! ~/utils */"./src/utils/index.ts");function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false,n.configurable=true,"value"in n&&(n.writable=true),Object.defineProperty(e,n.key,n);}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r,e}var s=function(){function e(t){var r=arguments.length>1&&undefined!==arguments[1]?arguments[1]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"target",[]),i(this,"chunk",undefined),i(this,"position",0),this.chunk=t,this.position=r;}var t,r;return t=e,(r=[{key:"iterate",value:function(e){for(;this.position<this.chunk.length;){var t=e(this);t&&this.target.push(t);}}},{key:"getString",value:function(){var e=arguments.length>0&&undefined!==arguments[0]?arguments[0]:20,t=Object(n.getStringFromBuffer)(this.getBuffer(this.position,e));return this.position+=e,t}},{key:"getInt16",value:function(){return this.chunk.buffer[this.position++]|this.chunk.buffer[this.position++]<<8}},{key:"getInt16BE",value:function(){return this.getInt16()<<16>>16}},{key:"getUInt32",value:function(){return (this.chunk.buffer[this.position++]|this.chunk.buffer[this.position++]<<8|this.chunk.buffer[this.position++]<<16|this.chunk.buffer[this.position++]<<24)>>>0}},{key:"getByte",value:function(){return this.chunk.buffer[this.position++]}},{key:"getChar",value:function(){return this.chunk.buffer[this.position++]<<24>>24}},{key:"skip",value:function(e){this.position+=e;}},{key:"getBuffer",value:function(e,t){return this.chunk.buffer.subarray(e,e+t)}},{key:"currentPosition",get:function(){return this.position}}])&&o(t.prototype,r),e}();},"./src/riff/index.ts":
		/*!***************************!*\
		  !*** ./src/riff/index.ts ***!
		  \***************************/
		/*! exports provided: ChunkIterator, ParseError, parseBuffer, getChunk, getChunkLength, getSubChunks, getChunkId, RIFFChunk */function(e,t,r){r.r(t);var n=r(/*! ./chunkIterator */"./src/riff/chunkIterator.ts");r.d(t,"ChunkIterator",function(){return n.ChunkIterator});var o=r(/*! ./parseError */"./src/riff/parseError.ts");r.d(t,"ParseError",function(){return o.ParseError});var i=r(/*! ./parser */"./src/riff/parser.ts");r.d(t,"parseBuffer",function(){return i.parseBuffer}),r.d(t,"getChunk",function(){return i.getChunk}),r.d(t,"getChunkLength",function(){return i.getChunkLength}),r.d(t,"getSubChunks",function(){return i.getSubChunks}),r.d(t,"getChunkId",function(){return i.getChunkId});var s=r(/*! ./riffChunk */"./src/riff/riffChunk.ts");r.d(t,"RIFFChunk",function(){return s.RIFFChunk});},"./src/riff/parseError.ts":
		/*!********************************!*\
		  !*** ./src/riff/parseError.ts ***!
		  \********************************/
		/*! exports provided: ParseError */function(e,t,r){function n(e){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return !t||"object"!==n(t)&&"function"!=typeof t?function(e){if(undefined===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t="function"==typeof Map?new Map:undefined;return (i=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(undefined!==t){if(t.has(e))return t.get(e);t.set(e,n);}function n(){return s(e,arguments,a(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}}),u(n,e)})(e)}function s(e,t,r){return (s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return  false;if(Reflect.construct.sham)return  false;if("function"==typeof Proxy)return  true;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return  false}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&u(o,r.prototype),o}).apply(null,arguments)}function u(e,t){return (u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return (a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.r(t),r.d(t,"ParseError",function(){return c});var c=function(e){function t(e,r,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,a(t).call(this,"".concat(e).concat(r&&n?", expected ".concat(r,", received ").concat(n):"")))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}}),t&&u(e,t);}(t,i(Error)),t}();},"./src/riff/parser.ts":
		/*!****************************!*\
		  !*** ./src/riff/parser.ts ***!
		  \****************************/
		/*! exports provided: parseBuffer, getChunk, getChunkLength, getSubChunks, getChunkId */function(e,t,r){r.r(t),r.d(t,"parseBuffer",function(){return s}),r.d(t,"getChunk",function(){return u}),r.d(t,"getChunkLength",function(){return a}),r.d(t,"getSubChunks",function(){return c}),r.d(t,"getChunkId",function(){return l});var n=r(/*! ./parseError */"./src/riff/parseError.ts"),o=r(/*! ~/utils/buffer */"./src/utils/buffer.ts"),i=r(/*! ./riffChunk */"./src/riff/riffChunk.ts"),s=function(e){var t=l(e);if("RIFF"!==t)throw new n.ParseError("Invalid file format","RIFF",t);var r=l(e,8);if("sfbk"!==r)throw new n.ParseError("Invalid signature","sfbk",r);var o=e.subarray(8),s=c(o.subarray(4));return new i.RIFFChunk(t,o.length,o,s)},u=function(e,t){var r=l(e,t),n=a(e,t+4),o=[];return "RIFF"!==r&&"LIST"!==r||(o=c(e.subarray(t+12))),new i.RIFFChunk(r,n,e.subarray(t+8),o)},a=function(e,t){return ((e=e.subarray(t,t+4))[0]|e[1]<<8|e[2]<<16|e[3]<<24)>>>0},c=function(e){for(var t=[],r=0;r<=e.length-8;){var n=u(e,r);t.push(n),r=(r+=8+n.length)%2?r+1:r;}return t},l=function(e){var t=arguments.length>1&&undefined!==arguments[1]?arguments[1]:0;return Object(o.getStringFromBuffer)(e.subarray(t,t+4))};},"./src/riff/riffChunk.ts":
		/*!*******************************!*\
		  !*** ./src/riff/riffChunk.ts ***!
		  \*******************************/
		/*! exports provided: RIFFChunk */function(e,t,r){r.r(t),r.d(t,"RIFFChunk",function(){return u});var n=r(/*! ./chunkIterator */"./src/riff/chunkIterator.ts"),o=r(/*! ~/utils */"./src/utils/index.ts");function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false,n.configurable=true,"value"in n&&(n.writable=true),Object.defineProperty(e,n.key,n);}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r,e}var u=function(){function e(t,r,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"id",undefined),s(this,"length",undefined),s(this,"buffer",undefined),s(this,"subChunks",undefined),this.id=t,this.length=r,this.buffer=n,this.subChunks=o;}var t,r;return t=e,(r=[{key:"getString",value:function(){var e=arguments.length>0&&undefined!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:undefined;return Object(o.getStringFromBuffer)(this.getBuffer(e,t||this.length-e))}},{key:"getInt16",value:function(){var e=arguments.length>0&&undefined!==arguments[0]?arguments[0]:0;return this.buffer[e++]|this.buffer[e]<<8}},{key:"getUInt32",value:function(){var e=arguments.length>0&&undefined!==arguments[0]?arguments[0]:0;return (this.buffer[e++]|this.buffer[e++]<<8|this.buffer[e++]<<16|this.buffer[e]<<24)>>>0}},{key:"getByte",value:function(){var e=arguments.length>0&&undefined!==arguments[0]?arguments[0]:0;return this.buffer[e]}},{key:"getChar",value:function(){var e=arguments.length>0&&undefined!==arguments[0]?arguments[0]:0;return this.buffer[e]<<24>>24}},{key:"iterator",value:function(){var e=arguments.length>0&&undefined!==arguments[0]?arguments[0]:0;return new n.ChunkIterator(this,e)}},{key:"iterate",value:function(e){var t=arguments.length>1&&undefined!==arguments[1]?arguments[1]:0,r=new n.ChunkIterator(this,t);return r.iterate(e),r.target}},{key:"getBuffer",value:function(e,t){return this.buffer.subarray(e,e+t)}}])&&i(t.prototype,r),e}();},"./src/soundFont2.ts":
		/*!***************************!*\
		  !*** ./src/soundFont2.ts ***!
		  \***************************/
		/*! exports provided: SoundFont2 */function(e,t,r){r.r(t),r.d(t,"SoundFont2",function(){return d});var n=r(/*! ./types */"./src/types/index.ts"),o=r(/*! ./chunk */"./src/chunk.ts"),i=r(/*! ./riff */"./src/riff/index.ts"),s=r(/*! ./chunks */"./src/chunks/index.ts"),u=r(/*! ./utils */"./src/utils/index.ts");function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){f(e,t,r[t]);});}return e}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false,n.configurable=true,"value"in n&&(n.writable=true),Object.defineProperty(e,n.key,n);}}function l(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r,e}var d=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"chunk",undefined),f(this,"metaData",undefined),f(this,"sampleData",undefined),f(this,"samples",undefined),f(this,"presetData",undefined),f(this,"instruments",undefined),f(this,"presets",undefined),f(this,"banks",undefined),!(t instanceof o.SF2Chunk)){var r=Object(i.parseBuffer)(t);t=new o.SF2Chunk(r);}if(3!==t.subChunks.length)throw new i.ParseError("Invalid sfbk structure","3 chunks","".concat(t.subChunks.length," chunks"));this.chunk=t,this.metaData=t.subChunks[0].getMetaData(),this.sampleData=t.subChunks[1].getSampleData(),this.presetData=t.subChunks[2].getPresetData(),this.samples=this.getSamples(),this.instruments=this.getInstruments(),this.presets=this.getPresets(),this.banks=this.getBanks();}return l(e,null,[{key:"from",value:function(t){return new e(t)}}]),l(e,[{key:"getKeyData",value:function(e){var t=this,r=arguments.length>1&&undefined!==arguments[1]?arguments[1]:0,n=arguments.length>2&&undefined!==arguments[2]?arguments[2]:0;return Object(u.memoize)(function(e,r,n){var o=t.banks[r];if(o){var i=o.presets[n];if(i){var s=i.zones.find(function(r){return t.isKeyInRange(r,e)});if(s){var u=s.instrument,c=u.zones.find(function(r){return t.isKeyInRange(r,e)});if(c){var l=c.sample,f=a({},s.generators,c.generators),d=a({},s.modulators,c.modulators);return {keyNumber:e,preset:i,instrument:u,sample:l,generators:f,modulators:d}}}}}return null})(e,r,n)}},{key:"isKeyInRange",value:function(e,t){return undefined===e.keyRange||e.keyRange.lo<=t&&e.keyRange.hi>=t}},{key:"getBanks",value:function(){return this.presets.reduce(function(e,t){var r=t.header.bank;return e[r]||(e[r]={presets:[]}),e[r].presets[t.header.preset]=t,e},[])}},{key:"getPresets",value:function(){var e=this.presetData,t=e.presetHeaders,r=e.presetZones,o=e.presetGenerators,i=e.presetModulators;return Object(s.getItemsInZone)(t,r,i,o,this.instruments,n.GeneratorType.Instrument).filter(function(e){return "EOP"!==e.header.name}).map(function(e){return {header:e.header,globalZone:e.globalZone,zones:e.zones.map(function(e){return {keyRange:e.keyRange,generators:e.generators,modulators:e.modulators,instrument:e.reference}})}})}},{key:"getInstruments",value:function(){var e=this.presetData,t=e.instrumentHeaders,r=e.instrumentZones,o=e.instrumentModulators,i=e.instrumentGenerators;return Object(s.getItemsInZone)(t,r,o,i,this.samples,n.GeneratorType.SampleId).filter(function(e){return "EOI"!==e.header.name}).map(function(e){return {header:e.header,globalZone:e.globalZone,zones:e.zones.map(function(e){return {keyRange:e.keyRange,generators:e.generators,modulators:e.modulators,sample:e.reference}})}})}},{key:"getSamples",value:function(){var e=this;return this.presetData.sampleHeaders.filter(function(e){return "EOS"!==e.name}).map(function(t){if("EOS"!==t.name&&t.sampleRate<=0)throw new Error("Illegal sample rate of ".concat(t.sampleRate," hz in sample '").concat(t.name,"'"));return t.originalPitch>=128&&t.originalPitch<=254&&(t.originalPitch=60),t.startLoop-=t.start,t.endLoop-=t.start,{header:t,data:new Int16Array(new Uint8Array(e.sampleData.subarray(2*t.start,2*t.end)).buffer)}})}}]),e}();},"./src/types/bank.ts":
		/*!***************************!*\
		  !*** ./src/types/bank.ts ***!
		  \***************************/
		/*! no static exports found */function(e,t){},"./src/types/generator.ts":
		/*!********************************!*\
		  !*** ./src/types/generator.ts ***!
		  \********************************/
		/*! exports provided: GeneratorType, DEFAULT_GENERATOR_VALUES */function(e,t,r){var n,o;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r,e}r.r(t),r.d(t,"GeneratorType",function(){return o}),r.d(t,"DEFAULT_GENERATOR_VALUES",function(){return s}),function(e){e[e.StartAddrsOffset=0]="StartAddrsOffset",e[e.EndAddrsOffset=1]="EndAddrsOffset",e[e.StartLoopAddrsOffset=2]="StartLoopAddrsOffset",e[e.EndLoopAddrsOffset=3]="EndLoopAddrsOffset",e[e.StartAddrsCoarseOffset=4]="StartAddrsCoarseOffset",e[e.ModLFOToPitch=5]="ModLFOToPitch",e[e.VibLFOToPitch=6]="VibLFOToPitch",e[e.ModEnvToPitch=7]="ModEnvToPitch",e[e.InitialFilterFc=8]="InitialFilterFc",e[e.InitialFilterQ=9]="InitialFilterQ",e[e.ModLFOToFilterFc=10]="ModLFOToFilterFc",e[e.ModEnvToFilterFc=11]="ModEnvToFilterFc",e[e.EndAddrsCoarseOffset=12]="EndAddrsCoarseOffset",e[e.ModLFOToVolume=13]="ModLFOToVolume",e[e.Unused1=14]="Unused1",e[e.ChorusEffectsSend=15]="ChorusEffectsSend",e[e.ReverbEffectsSend=16]="ReverbEffectsSend",e[e.Pan=17]="Pan",e[e.Unused2=18]="Unused2",e[e.Unused3=19]="Unused3",e[e.Unused4=20]="Unused4",e[e.DelayModLFO=21]="DelayModLFO",e[e.FreqModLFO=22]="FreqModLFO",e[e.DelayVibLFO=23]="DelayVibLFO",e[e.FreqVibLFO=24]="FreqVibLFO",e[e.DelayModEnv=25]="DelayModEnv",e[e.AttackModEnv=26]="AttackModEnv",e[e.HoldModEnv=27]="HoldModEnv",e[e.DecayModEnv=28]="DecayModEnv",e[e.SustainModEnv=29]="SustainModEnv",e[e.ReleaseModEnv=30]="ReleaseModEnv",e[e.KeyNumToModEnvHold=31]="KeyNumToModEnvHold",e[e.KeyNumToModEnvDecay=32]="KeyNumToModEnvDecay",e[e.DelayVolEnv=33]="DelayVolEnv",e[e.AttackVolEnv=34]="AttackVolEnv",e[e.HoldVolEnv=35]="HoldVolEnv",e[e.DecayVolEnv=36]="DecayVolEnv",e[e.SustainVolEnv=37]="SustainVolEnv",e[e.ReleaseVolEnv=38]="ReleaseVolEnv",e[e.KeyNumToVolEnvHold=39]="KeyNumToVolEnvHold",e[e.KeyNumToVolEnvDecay=40]="KeyNumToVolEnvDecay",e[e.Instrument=41]="Instrument",e[e.Reserved1=42]="Reserved1",e[e.KeyRange=43]="KeyRange",e[e.VelRange=44]="VelRange",e[e.StartLoopAddrsCoarseOffset=45]="StartLoopAddrsCoarseOffset",e[e.KeyNum=46]="KeyNum",e[e.Velocity=47]="Velocity",e[e.InitialAttenuation=48]="InitialAttenuation",e[e.Reserved2=49]="Reserved2",e[e.EndLoopAddrsCoarseOffset=50]="EndLoopAddrsCoarseOffset",e[e.CoarseTune=51]="CoarseTune",e[e.FineTune=52]="FineTune",e[e.SampleId=53]="SampleId",e[e.SampleModes=54]="SampleModes",e[e.Reserved3=55]="Reserved3",e[e.ScaleTuning=56]="ScaleTuning",e[e.ExclusiveClass=57]="ExclusiveClass",e[e.OverridingRootKey=58]="OverridingRootKey",e[e.Unused5=59]="Unused5",e[e.EndOper=60]="EndOper";}(o||(o={}));var s=(i(n={},o.StartAddrsOffset,0),i(n,o.EndAddrsOffset,0),i(n,o.StartLoopAddrsOffset,0),i(n,o.EndLoopAddrsOffset,0),i(n,o.StartAddrsCoarseOffset,0),i(n,o.ModLFOToPitch,0),i(n,o.VibLFOToPitch,0),i(n,o.ModEnvToPitch,0),i(n,o.InitialFilterFc,13500),i(n,o.InitialFilterQ,0),i(n,o.ModLFOToFilterFc,0),i(n,o.ModEnvToFilterFc,0),i(n,o.EndAddrsCoarseOffset,0),i(n,o.ModLFOToVolume,0),i(n,o.ChorusEffectsSend,0),i(n,o.ReverbEffectsSend,0),i(n,o.Pan,0),i(n,o.DelayModLFO,-12e3),i(n,o.FreqModLFO,0),i(n,o.DelayVibLFO,-12e3),i(n,o.FreqVibLFO,0),i(n,o.DelayModEnv,-12e3),i(n,o.AttackModEnv,-12e3),i(n,o.HoldModEnv,-12e3),i(n,o.DecayModEnv,-12e3),i(n,o.SustainModEnv,0),i(n,o.ReleaseModEnv,-12e3),i(n,o.KeyNumToModEnvHold,0),i(n,o.KeyNumToModEnvDecay,0),i(n,o.DelayVolEnv,-12e3),i(n,o.AttackVolEnv,-12e3),i(n,o.HoldVolEnv,-12e3),i(n,o.DecayVolEnv,-12e3),i(n,o.SustainVolEnv,0),i(n,o.ReleaseVolEnv,-12e3),i(n,o.KeyNumToVolEnvHold,0),i(n,o.KeyNumToVolEnvDecay,0),i(n,o.StartLoopAddrsCoarseOffset,0),i(n,o.KeyNum,-1),i(n,o.Velocity,-1),i(n,o.InitialAttenuation,0),i(n,o.EndLoopAddrsCoarseOffset,0),i(n,o.CoarseTune,0),i(n,o.FineTune,0),i(n,o.SampleModes,0),i(n,o.ScaleTuning,100),i(n,o.ExclusiveClass,0),i(n,o.OverridingRootKey,-1),n);},"./src/types/index.ts":
		/*!****************************!*\
		  !*** ./src/types/index.ts ***!
		  \****************************/
		/*! no static exports found */function(e,t,r){r.r(t);var n=r(/*! ./bank */"./src/types/bank.ts");for(var o in n)"default"!==o&&function(e){r.d(t,e,function(){return n[e]});}(o);var i=r(/*! ./generator */"./src/types/generator.ts");r.d(t,"GeneratorType",function(){return i.GeneratorType}),r.d(t,"DEFAULT_GENERATOR_VALUES",function(){return i.DEFAULT_GENERATOR_VALUES});var s=r(/*! ./instrument */"./src/types/instrument.ts");for(var o in s)["GeneratorType","DEFAULT_GENERATOR_VALUES","default"].indexOf(o)<0&&function(e){r.d(t,e,function(){return s[e]});}(o);var u=r(/*! ./key */"./src/types/key.ts");for(var o in u)["GeneratorType","DEFAULT_GENERATOR_VALUES","default"].indexOf(o)<0&&function(e){r.d(t,e,function(){return u[e]});}(o);var a=r(/*! ./metaData */"./src/types/metaData.ts");for(var o in a)["GeneratorType","DEFAULT_GENERATOR_VALUES","default"].indexOf(o)<0&&function(e){r.d(t,e,function(){return a[e]});}(o);var c=r(/*! ./modulator */"./src/types/modulator.ts");r.d(t,"ControllerType",function(){return c.ControllerType}),r.d(t,"ControllerPolarity",function(){return c.ControllerPolarity}),r.d(t,"ControllerDirection",function(){return c.ControllerDirection}),r.d(t,"ControllerPalette",function(){return c.ControllerPalette}),r.d(t,"Controller",function(){return c.Controller}),r.d(t,"TransformType",function(){return c.TransformType}),r.d(t,"DEFAULT_INSTRUMENT_MODULATORS",function(){return c.DEFAULT_INSTRUMENT_MODULATORS});var l=r(/*! ./preset */"./src/types/preset.ts");for(var o in l)["GeneratorType","DEFAULT_GENERATOR_VALUES","ControllerType","ControllerPolarity","ControllerDirection","ControllerPalette","Controller","TransformType","DEFAULT_INSTRUMENT_MODULATORS","default"].indexOf(o)<0&&function(e){r.d(t,e,function(){return l[e]});}(o);var f=r(/*! ./presetData */"./src/types/presetData.ts");for(var o in f)["GeneratorType","DEFAULT_GENERATOR_VALUES","ControllerType","ControllerPolarity","ControllerDirection","ControllerPalette","Controller","TransformType","DEFAULT_INSTRUMENT_MODULATORS","default"].indexOf(o)<0&&function(e){r.d(t,e,function(){return f[e]});}(o);var d=r(/*! ./sample */"./src/types/sample.ts");r.d(t,"SampleType",function(){return d.SampleType});var p=r(/*! ./zone */"./src/types/zone.ts");for(var o in p)["GeneratorType","DEFAULT_GENERATOR_VALUES","ControllerType","ControllerPolarity","ControllerDirection","ControllerPalette","Controller","TransformType","DEFAULT_INSTRUMENT_MODULATORS","SampleType","default"].indexOf(o)<0&&function(e){r.d(t,e,function(){return p[e]});}(o);},"./src/types/instrument.ts":
		/*!*********************************!*\
		  !*** ./src/types/instrument.ts ***!
		  \*********************************/
		/*! no static exports found */function(e,t){},"./src/types/key.ts":
		/*!**************************!*\
		  !*** ./src/types/key.ts ***!
		  \**************************/
		/*! no static exports found */function(e,t){},"./src/types/metaData.ts":
		/*!*******************************!*\
		  !*** ./src/types/metaData.ts ***!
		  \*******************************/
		/*! no static exports found */function(e,t){},"./src/types/modulator.ts":
		/*!********************************!*\
		  !*** ./src/types/modulator.ts ***!
		  \********************************/
		/*! exports provided: ControllerType, ControllerPolarity, ControllerDirection, ControllerPalette, Controller, TransformType, DEFAULT_INSTRUMENT_MODULATORS */function(e,t,r){r.r(t),r.d(t,"ControllerType",function(){return n}),r.d(t,"ControllerPolarity",function(){return o}),r.d(t,"ControllerDirection",function(){return i}),r.d(t,"ControllerPalette",function(){return s}),r.d(t,"Controller",function(){return u}),r.d(t,"TransformType",function(){return a}),r.d(t,"DEFAULT_INSTRUMENT_MODULATORS",function(){return l});var n,o,i,s,u,a,c=r(/*! ./generator */"./src/types/generator.ts");!function(e){e[e.Linear=0]="Linear",e[e.Concave=1]="Concave",e[e.Convex=2]="Convex",e[e.Switch=3]="Switch";}(n||(n={})),function(e){e[e.Unipolar=0]="Unipolar",e[e.Bipolar=1]="Bipolar";}(o||(o={})),function(e){e[e.Increasing=0]="Increasing",e[e.Decreasing=1]="Decreasing";}(i||(i={})),function(e){e[e.GeneralController=0]="GeneralController",e[e.MidiController=1]="MidiController";}(s||(s={})),function(e){e[e.NoController=0]="NoController",e[e.NoteOnVelocity=2]="NoteOnVelocity",e[e.NoteOnKeyNumber=3]="NoteOnKeyNumber",e[e.PolyPressure=10]="PolyPressure",e[e.ChannelPressure=13]="ChannelPressure",e[e.PitchWheel=14]="PitchWheel",e[e.PitchWheelSensitivity=16]="PitchWheelSensitivity",e[e.Link=127]="Link";}(u||(u={})),function(e){e[e.Linear=0]="Linear",e[e.Absolute=2]="Absolute";}(a||(a={}));var l=[{id:c.GeneratorType.InitialAttenuation,source:{type:n.Concave,polarity:o.Unipolar,direction:i.Decreasing,palette:s.GeneralController,index:u.NoteOnVelocity},value:960,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.NoController},transform:a.Linear},{id:c.GeneratorType.InitialFilterFc,source:{type:n.Linear,polarity:o.Unipolar,direction:i.Decreasing,palette:s.GeneralController,index:u.NoteOnVelocity},value:-2400,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.NoController},transform:a.Linear},{id:c.GeneratorType.VibLFOToPitch,source:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.ChannelPressure},value:50,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.NoController},transform:a.Linear},{id:c.GeneratorType.VibLFOToPitch,source:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.MidiController,index:1},value:50,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.NoController},transform:a.Linear},{id:c.GeneratorType.InitialAttenuation,source:{type:n.Concave,polarity:o.Unipolar,direction:i.Decreasing,palette:s.MidiController,index:7},value:960,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.NoController},transform:a.Linear},{id:c.GeneratorType.InitialAttenuation,source:{type:n.Linear,polarity:o.Bipolar,direction:i.Increasing,palette:s.MidiController,index:10},value:1e3,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.NoController},transform:a.Linear},{id:c.GeneratorType.InitialAttenuation,source:{type:n.Concave,polarity:o.Unipolar,direction:i.Decreasing,palette:s.MidiController,index:11},value:960,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.NoController},transform:a.Linear},{id:c.GeneratorType.ReverbEffectsSend,source:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.MidiController,index:91},value:200,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.NoController},transform:a.Linear},{id:c.GeneratorType.ChorusEffectsSend,source:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.MidiController,index:93},value:200,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.NoController},transform:a.Linear},{id:c.GeneratorType.CoarseTune,source:{type:n.Linear,polarity:o.Bipolar,direction:i.Increasing,palette:s.GeneralController,index:u.PitchWheel},value:12700,valueSource:{type:n.Linear,polarity:o.Unipolar,direction:i.Increasing,palette:s.GeneralController,index:u.PitchWheelSensitivity},transform:a.Linear}];},"./src/types/preset.ts":
		/*!*****************************!*\
		  !*** ./src/types/preset.ts ***!
		  \*****************************/
		/*! no static exports found */function(e,t){},"./src/types/presetData.ts":
		/*!*********************************!*\
		  !*** ./src/types/presetData.ts ***!
		  \*********************************/
		/*! no static exports found */function(e,t){},"./src/types/sample.ts":
		/*!*****************************!*\
		  !*** ./src/types/sample.ts ***!
		  \*****************************/
		/*! exports provided: SampleType */function(e,t,r){var n;r.r(t),r.d(t,"SampleType",function(){return n}),function(e){e[e.EOS=0]="EOS",e[e.Mono=1]="Mono",e[e.Right=2]="Right",e[e.Left=4]="Left",e[e.Linked=8]="Linked",e[e.RomMono=32769]="RomMono",e[e.RomRight=32770]="RomRight",e[e.RomLeft=32772]="RomLeft",e[e.RomLinked=32776]="RomLinked";}(n||(n={}));},"./src/types/zone.ts":
		/*!***************************!*\
		  !*** ./src/types/zone.ts ***!
		  \***************************/
		/*! no static exports found */function(e,t){},"./src/utils/buffer.ts":
		/*!*****************************!*\
		  !*** ./src/utils/buffer.ts ***!
		  \*****************************/
		/*! exports provided: getStringFromBuffer */function(e,t,r){r.r(t),r.d(t,"getStringFromBuffer",function(){return n});var n=function(e){return new TextDecoder("utf8").decode(e).split(/\0/)[0].trim()};},"./src/utils/index.ts":
		/*!****************************!*\
		  !*** ./src/utils/index.ts ***!
		  \****************************/
		/*! exports provided: getStringFromBuffer, memoize */function(e,t,r){r.r(t);var n=r(/*! ./buffer */"./src/utils/buffer.ts");r.d(t,"getStringFromBuffer",function(){return n.getStringFromBuffer});var o=r(/*! ./memoize */"./src/utils/memoize.ts");r.d(t,"memoize",function(){return o.memoize});},"./src/utils/memoize.ts":
		/*!******************************!*\
		  !*** ./src/utils/memoize.ts ***!
		  \******************************/
		/*! exports provided: memoize */function(e,t,r){r.r(t),r.d(t,"memoize",function(){return n});var n=function(e){var t={};return function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=JSON.stringify(n);if(i in t)return t[i];var s=e.apply(undefined,n);return t[i]=s,s}};}})});
		
	} (SoundFont2));
	return SoundFont2.exports;
}

var SoundFont2Exports = requireSoundFont2();

const m = (e) => Math.pow(2, e / 1200), Q = (e) => e / 1e3, G = (e, t) => {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
};
typeof AudioParam < "u" && (AudioParam.prototype.dahdsr = function(e, t, n, o, r, s, a, c, i) {
  r = Math.max(G(r, 4), 1e-3), a = Math.max(G(a, 4), 1e-3), i = G(i, 4), t = Math.max(t, 1e-3);
  let l = e;
  return this.setValueAtTime(t, l), this.setValueAtTime(t, l += o), this.exponentialRampToValueAtTime(n, l += r), this.setValueAtTime(n, l += s), this.exponentialRampToValueAtTime(Math.max(c * n, 1e-3), l += a), (d, u) => {
    this.cancelAndHoldAtTime(d);
    const f = Math.max(u != null ? u : t, 1e-3);
    this.exponentialRampToValueAtTime(f, d + i);
  };
});
const T = {
  0: "startAddrOffset",
  1: "endAddrOffset",
  2: "startloopAddrsOffset",
  3: "endloopAddrsOffset",
  4: "startAddrsCoarseOffset",
  5: "modLfoToPitch",
  6: "vibLfoToPitch",
  7: "modEnvToPitch",
  8: "initialFilterFc",
  9: "initialFilterQ",
  10: "modLfoToFilterFc",
  11: "modEnvToFilterFc",
  12: "endAddrsCoarseOffset",
  13: "modLfoToVolume",
  14: "unused1",
  15: "chorusEffectsSend",
  16: "reverbEffectsSend",
  17: "pan",
  18: "unused2",
  19: "unused3",
  20: "unused4",
  21: "delayModLFO",
  22: "freqModLFO",
  23: "delayVibLFO",
  24: "freqVibLFO",
  25: "delayModEnv",
  26: "attackModEnv",
  27: "holdModEnv",
  28: "decayModEnv",
  29: "sustainModEnv",
  30: "releaseModEnv",
  31: "keyNumToModEnvHold",
  32: "keyNumToModEnvDecay",
  33: "delayVolEnv",
  34: "attackVolEnv",
  35: "holdVolEnv",
  36: "decayVolEnv",
  37: "sustainVolEnv",
  38: "releaseVolEnv",
  39: "keyNumToVolEnvHold",
  40: "keyNumToVolEnvDecay",
  41: "instrument",
  42: "reserved1",
  43: "keyRange",
  44: "velRange",
  45: "startloopAddrsCoarseOffset",
  46: "keyNum",
  47: "velocity",
  48: "initialAttenuation",
  49: "reserved2",
  50: "endloopAddrsCoarseOffset",
  51: "coarseTune",
  52: "fineTune",
  53: "sampleID",
  54: "sampleModes",
  55: "reserved3",
  56: "scaleTuning",
  57: "exclusiveClass",
  58: "overridingRootKey",
  59: "unused5",
  60: "endOper"
}; Object.fromEntries(
  Object.entries(SoundFont2Exports.DEFAULT_GENERATOR_VALUES).map(([e, t]) => [T[e], t])
); const D = (e, t, n, o, r) => {
  var h, g, y, E, b, A, O;
  const s = SoundFont2Exports.DEFAULT_GENERATOR_VALUES[e];
  if (typeof s != "number")
    throw new Error(`no default value found for generator with index ${e}`);
  const a = t.generators[e], c = (g = (h = n.globalZone) == null ? undefined : h.generators) == null ? undefined : g[e], i = (y = o == null ? undefined : o.generators) == null ? undefined : y[e], l = (b = (E = r.globalZone) == null ? undefined : E.generators) == null ? undefined : b[e], d = a && "value" in a ? a.value : undefined, u = c && "value" in c ? c.value : undefined, f = i && "value" in i ? i.value : undefined, v = l && "value" in l ? l.value : undefined, p = (A = d != null ? d : u) != null ? A : s, M = (O = f != null ? f : v) != null ? O : 0;
  return p + M;
}, J = (e) => SoundFont2Exports.DEFAULT_GENERATOR_VALUES[e] !== undefined, W = (e, t, n) => {
  var o, r, s, a;
  return Object.fromEntries(
    Array.from(
      new Set(
        [
          Object.keys((r = (o = n.globalZone) == null ? undefined : o.generators) != null ? r : {}),
          Object.keys(t.generators),
          Object.keys((a = (s = t.instrument.globalZone) == null ? undefined : s.generators) != null ? a : {}),
          Object.keys(e.generators)
        ].flat()
      )
    ).filter(J).map((c) => [T[c], D(parseInt(c), e, t.instrument, t, n)])
  );
};
async function ae(e) {
  const t = await fetch(e).then((o) => o.arrayBuffer()), n = new Uint8Array(t);
  return new SoundFont2Exports.SoundFont2(n);
}
function X(e, t, n) {
  let { time: o = e.currentTime } = n;
  const {
    midi: r,
    start: s,
    velocity: a = 0.3,
    startLoop: c,
    endLoop: i,
    sampleRate: l,
    originalPitch: d,
    pitchCorrection: u,
    type: f,
    sampleModes: v = 0,
    overridingRootKey: p,
    fineTune: M = 0,
    startloopAddrsOffset: h = 0,
    startloopAddrsCoarseOffset: g = 0,
    endloopAddrsOffset: y = 0,
    endloopAddrsCoarseOffset: E = 0,
    delayVolEnv: b = -12e3,
    attackVolEnv: A = -12e3,
    holdVolEnv: O = -12e3,
    decayVolEnv: N = -12e3,
    sustainVolEnv: F = 0,
    releaseVolEnv: L = -12e3,
    pan: P = 0,
    ...Z
  } = n, B = 100 * (p !== undefined && p !== -1 ? p : d) + u - M, I = r * 100 - B, K = 1 * Math.pow(2, I / 1200);
  t.playbackRate.value = K;
  const j = c + h + g * 32768, S = i + y + E * 32768;
  S > j && v === 1 ? (t.loopStart = j / l, t.loopEnd = S / l, t.loop = true) : v === 3 && console.warn("unimplemented sampleMode 3 (play till end on note off)"), Object.keys(Z).filter(
    (V) => !["name", "instrument", "keyRange", "sampleID", "end"].includes(V)
  ).length;
  const k = e.createGain(), H = [
    o,
    0,
    a,
    m(b),
    m(A),
    m(O),
    m(N),
    F >= 960 ? 0 : 1 - Q(F),
    m(L)
  ], U = k.gain.dahdsr(...H), R = e.createStereoPanner();
  return R.pan.value = P / 1e3, k.connect(R), t.connect(k), R.connect(e.destination), t.start(o), (V = e.currentTime) => {
    t.stop(V + m(L)), U(V);
  };
}
function Y(e, t, n = {}) {
  const { header: o, data: r } = t, s = new Float32Array(r.length);
  for (let l = 0; l < r.length; l++)
    s[l] = r[l] / 32768;
  const a = e.createBuffer(1, s.length, o.sampleRate);
  a.getChannelData(0).set(s);
  const i = e.createBufferSource();
  return i.buffer = a, n = { ...o, ...n }, X(e, i, n);
}
const C = (e, t) => !e.keyRange || e.keyRange.lo <= t && t <= e.keyRange.hi, x = (e, t) => e.zones.filter((o) => C(o, t) && o.instrument).map((o) => o.instrument.zones.filter((r) => C(r, t)).map((r) => {
  const s = W(r, o, e);
  return {
    ...r,
    mergedGenerators: s
  };
})).flat(), ce = (e, t, n, o = e.currentTime) => {
  const s = x(t, n).map(
    (a) => Y(e, a.sample, {
      ...a.mergedGenerators,
      midi: n,
      time: o
    })
  );
  return (a = e.currentTime) => {
    s.forEach((c) => c(a));
  };
};

Pattern.prototype.soundfont = function (sf, n = 0) {
  return this.onTrigger((h, ct, cps, targetTime) => {
    const ctx = getAudioContext();
    const note = getPlayableNoteValue(h);
    const preset = sf.presets[n % sf.presets.length];
    const deadline = targetTime;
    const args = [ctx, preset, noteToMidi(note), deadline];
    const stop = ce(...args);
    stop(deadline + h.duration);
  });
};

const soundfontCache = new Map();
function loadSoundfont(url) {
  if (soundfontCache.get(url)) {
    return soundfontCache.get(url);
  }
  const sf = ae(url);
  soundfontCache.set(url, sf);
  /*sf.then((font) => {
    font.presets.forEach((preset) => {
      console.log('preset', preset.header.name);
      registerSound(
        preset.header.name.replaceAll(' ', '_'),
        (time, value, onended) => {
          const ctx = getAudioContext();
          let { note } = value; // freq ?

          const p = font.presets.find((p) => p.header.name === preset.header.name);

          if (!p) {
            throw new Error('preset not found');
          }
          const deadline = time; // - ctx.currentTime;
          const args = [ctx, p, noteToMidi(note), deadline];
          const stop = startPresetNote(...args);
          return { node: undefined, stop };
        },
        { type: 'soundfont' },
      );
    });
    //console.log('f', f);
  });*/
  return sf;
}

export { getFontBufferSource, loadSoundfont, registerSoundfonts, setSoundfontUrl, list as soundfontList, ce as startPresetNote };
