function getImage(id)
{
    $.get(`https://cdn.discordapp.com/emojis/${id}.png`, function( data ) {
        $( ".result" ).html( data );
        alert( "Load was performed." );
      });
}