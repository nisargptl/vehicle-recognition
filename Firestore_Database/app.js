// npm install -g firebase-tools
//firebase login
//firebase init
//firebase deploy
const div=document.querySelector('div');

function renderCafe(doc)
{
    let html=`<li>`;
    html+=`${doc.data().Name}`;
    html+=`</li>`;
    div.innerHTML+=html;
}

db.collection('cars').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
        console.log(doc.data());
    });
});