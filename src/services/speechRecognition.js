function getSpeechRecognitionAPI() {
  const grammar =
    "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
  if ("webkitSpeechRecognition" in window) {
    let recognition = new webkitSpeechRecognition();
    return recognition;
  } else {
    console.log("Speech recognition not available");
  }
}

export const recognition = getSpeechRecognitionAPI();
