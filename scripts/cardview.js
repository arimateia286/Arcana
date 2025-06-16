const params = new URLSearchParams(window.location.search);
let cardParam = params.get('card');
if (!cardParam) cardParam = "O Louco";

if (theme == 1) generateCardView(document.body, cardParam, false, true);
else generateCardView(document.body, cardParam, false, true);