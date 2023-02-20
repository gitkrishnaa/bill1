let add_item_1 = document.getElementById('add-item-1');

// let display=document.getElementById("data-head");

let body = document.querySelector('body');

const add_item_arr = [];

// data entry window popup part creating
add_item_1.addEventListener('click', () => {
  let window1 = document.createElement('div');

  //id
  window1.id = 'window_popup1';

  body.appendChild(window1);
  window1.style.width = '200px';
  window1.style.minheight = '200px';
  window1.style.position = 'fixed';
  window1.style.backgroundColor = 'red';

  window1.style.top = '30%';

  window1.style.left = '40%';

  let close_button = document.createElement('button'); //0
  close_button.innerText = 'X';
  close_button.style.display = 'block';
  window1.appendChild(close_button);

  //input field in window1
  const front_image = document.createElement('input'); //
  front_image.setAttribute('type', 'file');
  front_image.id = 'front_image1';

  const back_image = document.createElement('input');
  back_image.setAttribute('type', 'file');
  back_image.id = 'back_image1';

  const details = document.createElement('input'); //5
  details.id = 'details1';

  // select and option
  const type = document.createElement('select');
  type.setAttribute('id', 'select1');
  console.log(type.value);

  var z = document.createElement('option');
  var t = document.createTextNode('22');
  z.appendChild(t);
  var z1 = document.createElement('option');
  var t1 = document.createTextNode('20');
  z1.appendChild(t1);
  var z2 = document.createElement('option');
  var t2 = document.createTextNode('18');
  z2.appendChild(t2);
  type.appendChild(z);
  type.appendChild(z1);
  type.appendChild(z2);

  const weight = document.createElement('input');
  weight.id = 'weight1';

  const making = document.createElement('input');
  making.id = 'making';
  const add_on = document.createElement('input');
  add_on.id = 'add_on1';

  const front_image_text = document.createElement('p');
  const back_image_text = document.createElement('p');
  const details_text = document.createElement('p');
  const type_text = document.createElement('p');
  const weight_text = document.createElement('p');
  const making_text = document.createElement('p');
  const add_on_text = document.createElement('p');

  front_image_text.innerText = 'front image';
  back_image_text.innerText = 'back image';
  details_text.innerText = 'details:';
  type_text.innerText = 'type:';
  weight_text.innerText = 'weight:';
  making_text.innerText = 'making charge%:';
  add_on_text.innerText = 'add on';

  window1.appendChild(front_image_text);
  window1.appendChild(front_image);

  window1.appendChild(back_image_text);
  window1.appendChild(back_image);

  window1.appendChild(details_text);
  window1.appendChild(details);
  window1.appendChild(type_text);
  window1.appendChild(type);

  window1.appendChild(weight_text);
  window1.appendChild(weight);

  window1.appendChild(making_text);
  window1.appendChild(making);

  window1.appendChild(add_on_text);
  window1.appendChild(add_on);

  details.setAttribute('placeholder', 'details');
  type.setAttribute('placeholder', 'type');
  weight.setAttribute('placeholder', 'weight');
  making.setAttribute('placeholder', 'making charge');
  add_on.setAttribute('placeholder', 'add on');

  //save and cancel button
  const cancel1 = document.createElement('button');
  const save1 = document.createElement('button');
  cancel1.innerText = 'Cancel';
  save1.innerText = 'Save';
  window1.appendChild(cancel1);
  window1.appendChild(save1);

  // close the popup part
  close_button.addEventListener('click', () => {
    // window1.style.visibility="hidden"
    window1.remove();
  });
  cancel1.addEventListener('click', () => {
    // window1.style.visibility="hidden"

    window1.remove();
  });
  // popup part>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  alert();
  console.log(alert);
  save1.addEventListener('click', () => {
    const display = document.getElementById('display');
    // window1.style.visibility="hidden"
    const div_main = document.createElement('div');

    //div main css part class assign
    div_main.className = 'data-field-data_div';

    const div_no = document.createElement('div');
    const div_details = document.createElement('div');
    const div_type = document.createElement('div');
    const div_weight = document.createElement('div');
    const div_price = document.createElement('div');
    const div_making_charge = document.createElement('div');
    const div_add_on = document.createElement('div');
    const div_total = document.createElement('div');

    //append
    display.appendChild(div_main);
    div_main.appendChild(div_no);
    div_main.appendChild(div_details);
    div_main.appendChild(div_type);
    div_main.appendChild(div_weight);
    div_main.appendChild(div_price);
    div_main.appendChild(div_making_charge);
    div_main.appendChild(div_add_on);
    div_main.appendChild(div_total);

    //window1 popup value to div data-field
    let data_window_popup1 = document.getElementById('window_popup1');
    console.log(data_window_popup1.childNodes);
    const total_price = Math.floor(
      weight.value * 5000 + (making.value * weight.value * 5000) / 100
    );

    div_no.innerText = add_item_arr.length + 1;
    add_item_arr[add_item_arr.length] = total_price;
    console.log(add_item_arr);
    div_details.innerText = details.value;
    div_type.innerText = type.value;
    div_weight.innerText = weight.value;
    div_price.innerText = weight.value * 5000;
    div_making_charge.innerText = Math.floor(
      (making.value * weight.value * 5000) / 100
    );
    div_add_on.innerText = making.value;
    div_total.innerText = total_price;

    //image part in data field
    const div_main_image = document.createElement('div');

    const image_div = document.createElement('div');

    const image_div_front = document.createElement('div');
    const image_div_front_img = document.createElement('img');
    image_div_front.appendChild(image_div_front_img);
    image_div_front_img.style.width = '100%';
    image_div_front_img.style.height = '100%';

    const image_div_back = document.createElement('div');
    const image_div_back_img = document.createElement('img');
    image_div_back.appendChild(image_div_back_img);
    image_div_back_img.style.width = '100%';
    image_div_back_img.style.height = '100%';

    image_div.style.width = '100%';
    image_div.style.height = '100%';
    image_div.style.display = 'flex';
    image_div.style.justifyContent = 'space-evenly';
    image_div.style.alignItems = 'center';

    //  image_div.style.backgroundColor="yellow"

    image_div_front.style.width = '45%';
    image_div_front.style.height = '90%';
    // image_div_front.style.backgroundColor="gold"

    image_div_back.style.width = '45%';
    image_div_back.style.height = '90%';
    //  image_div_back.style.backgroundColor="gold"

    div_main_image.style.width = '11.4cm';
    div_main_image.style.height = '5cm';
    // div_main_image.style.backgroundColor="white"

    //  const div_details_text=document.createElement("div");
    //  div_details_text.style.backgroundColor="grey"
    //  div_details_text.innerText="detail of item"

    image_div.appendChild(image_div_front);
    image_div.appendChild(image_div_back);

    div_main_image.appendChild(image_div);
    // div_main_image.appendChild(div_details_text);

    div_details.appendChild(div_main_image);
    /// image showing part>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //note id for front_image->line- 36 front_image.id="front_image1";
    //note id for back_image--back_image.id="back_image1";

    //previe front variable name-image_div_front_img
    //previe back variable name-image_div_back_img

    //

    function image_display1(input, preview_div) {
      var reader;

      if (input.files && input.files[0]) {
        reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = function (e) {
          preview_div.setAttribute('src', e.target.result);
          console.log(e.target.result);
        };
      }
    }

    image_display1(front_image, image_div_front_img);
    image_display1(back_image, image_div_back_img);

    // after enter data remove popup window1
    window1.remove();
  });
  // data field creating
});
