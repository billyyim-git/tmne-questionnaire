function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('TMNE Sales Questionnaire')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
