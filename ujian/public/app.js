const API = "http://localhost/ujian/api";

// read
function loadNotes() {
    fetch(`${API}/read.php`)
        .then(res => res.json())
        .then(notes => {
            const list = document.getElementById("list");
            list.innerHTML = "";
            notes.forEach(n => {
                list.innerHTML += `
                    <div class="note">
                        <h3>${n.title}</h3>
                        <p>${n.content}</p>
                        <small>${n.created_at}</small><br>
                        <button onclick="editNote(${n.id}, '${n.title}', '${n.content}')">Edit</button>
                        <button onclick="deleteNote(${n.id})">Delete</button>
                    </div>
                `;
            });
        });
}

// create
function createNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    fetch(`${API}/create.php`, {
        method: "POST",
        body: JSON.stringify({ title, content })
    }).then(() => loadNotes());
}

// update
function editNote(id, oldTitle, oldContent) {
    const title = prompt("Author:", oldTitle);
    const content = prompt("Fill:", oldContent);

    fetch(`${API}/update.php`, {
        method: "POST",
        body: JSON.stringify({ id, title, content })
    }).then(() => loadNotes());
}

// delete
function deleteNote(id) {
    if (!confirm("Are you sure?")) return;

    fetch(`${API}/delete.php`, {
        method: "POST",
        body: JSON.stringify({ id })
    }).then(() => loadNotes());
}

loadNotes();
