function getImage(id)
{
    var format; 

    if (png.checked) format = "png";
    if (jpg.checked) format = "jpg";
    if (gif.checked) format = "gif";
    
    $("#result").html(`<img src="https://cdn.discordapp.com/emojis/${id}.${format}" /> <br><br> <a href="https://cdn.discordapp.com/emojis/${id}.${format}" class="btn btn-primary">Open in new tab</a><br><br>`);
}
