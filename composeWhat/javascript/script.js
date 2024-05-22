var form_list = ["period", "sentence"];
// var tempo_list = ["slow", "medium", "fast"];
var time_signature_list = ["4/4", "3/4"];
var key_list = ["A", "B", "C", "D", "E", "F", "G"];
var mode_list = ["Major", "Minor"];
// var starting_note_list = [];

function setSentence(){
    var form_sentence = document.getElementById("musicForm");
    var tempo_sentence = document.getElementById("tempo");
    var key_sentence = document.getElementById("key");
    var startingNote_sentence = document.getElementById("startingNote");

    form_list_index = getRandomInt(form_list.length);
    // tempo_list_index = getRandomInt(tempo_list.length);
    time_signature_list_index = getRandomInt(time_signature_list.length);
    key_list_index = getRandomInt(key_list.length);
    mode_list_index = getRandomInt(mode_list.length);

    var starting_notes = getRandomInt(7) + 1;
    var starting_notes_2 = getRandomInt(7) + 1;

    while (starting_notes_2 == starting_notes)
    {
        starting_notes_2 = getRandomInt(7) + 1;
    }

    console.log(starting_notes);
    console.log(starting_notes_2);

    var set_tempo = getRandomNumberInRange(70, 150);

    form_sentence.innerHTML = "in " + form_list[form_list_index] + " form";
    // tempo_sentence.innerHTML = "at a " + tempo_list[tempo_list_index] + " tempo, with " + time_signature_list[time_signature_list_index] + " time signature";
    tempo_sentence.innerHTML = "at " + set_tempo + " BPM, with a " + time_signature_list[time_signature_list_index] + " time signature";
    key_sentence.innerHTML = "in the key of " + key_list[key_list_index] + " " + mode_list[mode_list_index];
    startingNote_sentence.innerHTML = "starting on the notes " + starting_notes + ", " + starting_notes_2;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
