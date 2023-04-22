const deleteText = document.querySelectorAll('.fa-trash');
const thumbText = document.querySelectorAll('.fa-thumbs-up');

//array that goes through and deletes an element
Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deleteRapper);
});

//array that goes through and likes and element
Array.from(thumbText).forEach((element) => {
    element.addEventListener('click',deleteRapper)
});

// async function to deleteRapper
async function deleteRapper(){
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteRapper', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'stageNameS': sName,
                'birthNameS': bName
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
};

//async function to add a like
async function addLike(){
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'stageNameS': sName,
              'birthNameS': bName,
              'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
};
