function senitizeText(){
    const text = "my@##name$%is@#kanak"
    const sText = text.replace(/[^a-zA-Z ]/g, "")
    console.log(sText)
}

senitizeText()
