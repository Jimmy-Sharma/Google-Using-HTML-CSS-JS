function handleSubmit() {
    let search=document.getElementById("input").value
    let URL=`https://www.google.com/search?q=${search}`
    window.open(URL,'_self')
}