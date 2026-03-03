const M_YAW = 0.022;

function calculate() {
  const starting_input = document.getElementById("starting_angle").value;
  const desired_input = document.getElementById("desired_angle").value;
  const snap_count_input = document.getElementById("minisnap_count").value;
  const starting_angle = parseFloat(starting_input);
  const desired_angle = parseFloat(desired_input);
  const snap_count = parseInt(snap_count_input);

  if (starting_input == "" || desired_input == "" || snap_count_input == "") {
    document.getElementById("error").innerHTML = "&#8203;";
    return;
  }
  
  if (snap_count == 0) {
    document.getElementById("error").innerText = "minisnap count must not be 0";
    return;
  }

  if (!isNaN(starting_angle) && !isNaN(desired_angle) && !isNaN(snap_count)) {
    document.getElementById("error").innerHTML = "&#8203;";
    const delta = desired_angle - starting_angle;
    const viewsnap1 = Math.abs(delta / M_YAW / snap_count).toPrecision(8);
    const viewsnap2 = Math.abs((180 - Math.abs(delta)) / M_YAW / snap_count).toPrecision(8);
    document.getElementById("delta").innerText = delta;
    document.getElementById("viewsnap1").innerText = viewsnap1;
    document.getElementById("viewsnap2").innerText = viewsnap2;
    document.getElementById("bind").innerText = `bind x "m_rawinput 1; sst_mouse_factor 20; sensitivity ${viewsnap1}"`

  } else {
    document.getElementById("error").innerText = "something is wrong with the input, format numbers as such: 1234.5678";
  }
}