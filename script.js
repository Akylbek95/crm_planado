var tbl = document.querySelector('#detailView > div > div > div.span5 > div:nth-child(4)');
var btn=document.createElement('input');
btn.type='button';
btn.value='Установка ТВ';
btn.style.padding="30px;";

var btn1=document.createElement('input');
btn1.type='button';
btn1.value='Подключение';
btn1.style.marginLeft='50px;';
btn1.style.padding='30px;';

var btn2=document.createElement('input');
btn2.type='button';
btn2.value='Техпод';
btn2.style.padding="30px;";

var btn3=document.createElement('input');
btn3.type='button';
btn3.value='Смена  технологии';
btn3.style.padding="30px;";


btn2.addEventListener('click', function(){
	
	var cont = document.getElementsByClassName("value")[2].innerText;
		if (cont === "") 
	{
  cont  = "http://10.1.9.109/index.php?module=Contacts&view=Detail&record=586599"
} else {
  cont = document.querySelectorAll('	#detailView > div > div > div.span7 > div.summaryView.row-fluid > div > table > tbody > tr:nth-child(3) > td.fieldValue > div > span > a')[0].href;
		
}
	
	var city  = document.getElementsByClassName("value")[4].innerText;
	var street  = document.getElementsByClassName("value")[5].innerText;
	var date  = document.getElementsByClassName("value")[17].innerText;
	if (date === "") 
	{
  date = "2025-01-01";
} 
else {
	date = date.split("-").reverse().join("-");
	
}

	var time  = document.getElementsByClassName("value")[16].innerText;
if (time === "") {
  time = "10:00";
} else {
  time = time ;
}
    var fdata = date + "T" + time + ":00+06:00";
	
	var  ls = document.getElementsByClassName("value")[18].innerText;
	if (ls === "")
	{
     alert("Пустой лс");
} else  {
ls = ls;
}
	var mont  = document.getElementsByClassName("value")[20].innerText;
	if (mont === "Абилмуканов Данияр")
	{
     mont = "ik6@snt.kg";
} else if (mont === "Акимжанов Азамат") {
   mont = "bishkek3@snt.kg";
}  else if (mont === "Алымбеков Нурбек") {
   mont = "naryn2@snt.kg";
} else if (mont === "Волков Виталий") {
   mont = "vvolkov@snt.kg";
} else if (mont === "Гавин Максим") {
   mont = "bishkek12@snt.kg";
} else if (mont === "Гривков Тимур") {
   mont = "bishkek11@snt.kg";
} else if (mont === "Икирамов Темирлан") {
   mont = "osh1@snt.kg";
} else if (mont === "Исмаилов Сабырбек") {
   mont = "ik1@snt.kg";
} else if (mont === "Казакалиев Арген") {
   mont = "toktogul1@snt.kg";
} else if (mont === "Капарбай уулу Мавлянбек") {
   mont = "dj1@snt.kg";
} else if (mont === "Касым у. Мирлан") {
   mont = "ik2@snt.kg";
} else if (mont === "Кенченбаев Жаныбек") {
   mont = "ik3@snt.kg";
} else if (mont === "Маджун Хусеин") {
   mont = "bishkek16@snt.kg";
} else if (mont === "Михайлов Константин") {
   mont = "bishkek1@snt.kg";
} else if (mont === "Молдожашов Азим") {
   mont = "bishkek9@snt.kg";
} else if (mont === "Молдосанов Азамат") {
   mont = "bishkek10@snt.kg";
} else if (mont === "Назаров Элназ") {
   mont = "bishkek5@snt.kg";
} else if (mont === "Нурдин у. Акматбек") {
   mont = "bishkek7@snt.kg";
} else if (mont === "Сабыралы уулу Максатбек") {
   mont = "bishkek6@snt.kg";
} else if (mont === "Солто у. Сталбек") {
   mont = "ik4@snt.kg";
} else if (mont === "Сыдыкбеков Темирлан") {
   mont =  "ik5@snt.kg";
} else if (mont === "Таланбек уулу Рыскелди") {
   mont = "talas1@snt.kg";
} else if (mont === "Таштанбеков Кайрат") {
   mont = "bishkek13@snt.kg";
} else if (mont === "Уметбаев Элчибек") {
   mont =  "bishkek4@snt.kg";
} else if (mont === "Чондоев Элдияр") {
   mont = "bishkek2@snt.kg";
} else if (mont === "Test Testov") {
   mont = "a.karagulov@snt.kg";
} else if (mont === "") {
   mont = "a.karagulov@snt.kg";

}
	var description  = document.getElementsByClassName("value")[25].innerText;



    var request = new XMLHttpRequest();
    request.open("GET", cont, true);
    request.responseType = "document";
    request.send();
    request.onreadystatechange = function() {
     
	    var doc = request.response;
        var name = doc.getElementsByClassName("value")[0].innerText;
		var lastname = doc.getElementsByClassName("value")[2].innerText;
		var number = doc.getElementsByClassName("value")[4].innerText;
		
	name = name + " "+ lastname;
    console.log('контакты: ',cont);
	console.log('город: ',city);	
	console.log('улица: ',street);	
	console.log('Монтажник: ',mont);	
	console.log('Описание: ',description);
	console.log('дата: ',date);
	console.log('время: ',time);
	console.log('имя: ',name);
	console.log('фио:',lastname);
	console.log('номер:',number);
     
	function req(url,body) {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.responseType = 'json';
	xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Authorization", "Bearer QEVuQwFAEACUTCHbvSBLMU6+rRk02+S6IS1aRVf9vh8WCTxEVF5yVnIqppniRGs75XlyYEnLOAZV2J+VKx6AAGZOgXsm+VovwLxir4K0RVErOahFvAh0r8tTwh2HVKVGbqpIBWdRR6w=");
    xhr.send(JSON.stringify({"job_uuid": "13a151ed-7b90-6b10-5f2a-1a0fa0350a3e", "template": {
        "name": "Техпод"
    },
            "assignee": {
                "worker": {
                    "email": mont
                }},
            "scheduled_at": fdata,

            "custom_fields": [
               


                {"name": "Лицевой счет",
                 "value":  ls}

                 
             
            ],
            "description": description,
            "address": {"formatted": city +" "+ street},
            "contacts": [
                {
                    "name": name ,
                    "value": number,
                    "type": "phone"
                }
            ],
            },));
	
			if (xhr.status === 200) {
		
             alert("успешно",xhr.status);
			 console.log(xhr.status)
          } else {
			   console.log(xhr.status)
		
            alert(" не успешно",xhr.status);
          }
			
}   
 req('https://api.planadoapp.com/v2/jobs'); 
	 
    }



})






btn.addEventListener('click', function(){
	
	var cont = document.getElementsByClassName("value")[2].innerText;
		if (cont === "") 
	{
  cont  = "http://10.1.9.109/index.php?module=Contacts&view=Detail&record=586599"
} else {
  cont = document.querySelectorAll('	#detailView > div > div > div.span7 > div.summaryView.row-fluid > div > table > tbody > tr:nth-child(3) > td.fieldValue > div > span > a')[0].href;
		
}
	
	var city  = document.getElementsByClassName("value")[4].innerText;
	var street  = document.getElementsByClassName("value")[5].innerText;
	var date  = document.getElementsByClassName("value")[17].innerText;
	if (date === "") 
	{
  date = "2025-01-01";
} 
else {
	date = date.split("-").reverse().join("-");
	
}

	var time  = document.getElementsByClassName("value")[16].innerText;
if (time === "") {
  time = "10:00";
} else {
  time = time ;
}
    var fdata = date + "T" + time + ":00+06:00";
	
	var tv  = document.getElementsByClassName("value")[12].innerText;
	var  ls = document.getElementsByClassName("value")[18].innerText;
		if (ls === "")
	{
     alert("Пустой лс");
} else  {
ls = ls;
}
	var mont  = document.getElementsByClassName("value")[20].innerText;
	if (mont === "Абилмуканов Данияр")
	{
     mont = "ik6@snt.kg";
} else if (mont === "Акимжанов Азамат") {
   mont = "bishkek3@snt.kg";
}  else if (mont === "Алымбеков Нурбек") {
   mont = "naryn2@snt.kg";
} else if (mont === "Волков Виталий") {
   mont = "vvolkov@snt.kg";
} else if (mont === "Гавин Максим") {
   mont = "bishkek12@snt.kg";
} else if (mont === "Гривков Тимур") {
   mont = "bishkek11@snt.kg";
} else if (mont === "Икирамов Темирлан") {
   mont = "osh1@snt.kg";
} else if (mont === "Исмаилов Сабырбек") {
   mont = "ik1@snt.kg";
} else if (mont === "Казакалиев Арген") {
   mont = "toktogul1@snt.kg";
} else if (mont === "Капарбай уулу Мавлянбек") {
   mont = "dj1@snt.kg";
} else if (mont === "Касым у. Мирлан") {
   mont = "ik2@snt.kg";
} else if (mont === "Кенченбаев Жаныбек") {
   mont = "ik3@snt.kg";
} else if (mont === "Маджун Хусеин") {
   mont = "bishkek16@snt.kg";
} else if (mont === "Михайлов Константин") {
   mont = "bishkek1@snt.kg";
} else if (mont === "Молдожашов Азим") {
   mont = "bishkek9@snt.kg";
} else if (mont === "Молдосанов Азамат") {
   mont = "bishkek10@snt.kg";
} else if (mont === "Назаров Элназ") {
   mont = "bishkek5@snt.kg";
} else if (mont === "Нурдин у. Акматбек") {
   mont = "bishkek7@snt.kg";
} else if (mont === "Сабыралы уулу Максатбек") {
   mont = "bishkek6@snt.kg";
} else if (mont === "Солто у. Сталбек") {
   mont = "ik4@snt.kg";
} else if (mont === "Сыдыкбеков Темирлан") {
   mont =  "ik5@snt.kg";
} else if (mont === "Таланбек уулу Рыскелди") {
   mont = "talas1@snt.kg";
} else if (mont === "Таштанбеков Кайрат") {
   mont = "bishkek13@snt.kg";
} else if (mont === "Уметбаев Элчибек") {
   mont =  "bishkek4@snt.kg";
} else if (mont === "Чондоев Элдияр") {
   mont = "bishkek2@snt.kg";
} else if (mont === "Test Testov") {
   mont = "a.karagulov@snt.kg";
} else if (mont === "") {
   mont = "a.karagulov@snt.kg";

}
	var description  = document.getElementsByClassName("value")[25].innerText;



    var request = new XMLHttpRequest();
    request.open("GET", cont, true);
    request.responseType = "document";
    request.send();
    request.onreadystatechange = function() {
     
	    var doc = request.response;
        var name = doc.getElementsByClassName("value")[0].innerText;
		var lastname = doc.getElementsByClassName("value")[2].innerText;
		var number = doc.getElementsByClassName("value")[4].innerText;
		
	name = name + " "+ lastname;
    console.log('контакты: ',cont);
	console.log('город: ',city);	
	console.log('улица: ',street);	
	console.log('ТВ: ',tv);
	console.log('ЛС: ',ls);
	console.log('Монтажник: ',mont);	
	console.log('Описание: ',description);
	console.log('дата: ',date);
	console.log('время: ',time);
	console.log('имя: ',name);
	console.log('фио:',lastname);
	console.log('номер:',number);
     
	function req(url,body) {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.responseType = 'json';
	xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Authorization", "Bearer QEVuQwFAEACUTCHbvSBLMU6+rRk02+S6IS1aRVf9vh8WCTxEVF5yVnIqppniRGs75XlyYEnLOAZV2J+VKx6AAGZOgXsm+VovwLxir4K0RVErOahFvAh0r8tTwh2HVKVGbqpIBWdRR6w=");
    xhr.send(JSON.stringify({"job_uuid": "13a151ed-7b90-6b10-5f2a-1a0fa0350a3e", "template": {
        "name": "Установка ТВ"
    },
            "assignee": {
                "worker": {
                    "email": mont
                }},
            "scheduled_at": fdata,

            "custom_fields": [
               

                {"name": "Установка ТВ",
                 "value": {"name": tv}
                 },

                {"name": "Лицевой счет",
                 "value":  ls}

                 
             
            ],
            "description": description,
            "address": {"formatted": city +" "+ street},
            "contacts": [
                {
                    "name": name ,
                    "value": number,
                    "type": "phone"
                }
            ],
            },));
	
			if (xhr.status === 200) {
		
             alert("успешно",xhr.status);
			 console.log(xhr.status)
          } else {
			   console.log(xhr.status)
		
            alert(" не успешно",xhr.status);
          }
			
}   
 req('https://api.planadoapp.com/v2/jobs'); 
	 
    }



})








btn1.addEventListener('click', function(){
	
	var cont = document.getElementsByClassName("value")[2].innerText;
		if (cont === "") 
	{
  cont  = "http://10.1.9.109/index.php?module=Contacts&view=Detail&record=586599"
} else {
  cont = document.querySelectorAll('	#detailView > div > div > div.span7 > div.summaryView.row-fluid > div > table > tbody > tr:nth-child(3) > td.fieldValue > div > span > a')[0].href;
		
}
	
	var city  = document.getElementsByClassName("value")[4].innerText;
	var street  = document.getElementsByClassName("value")[5].innerText;
	var tarif  = document.getElementsByClassName("value")[11].innerText;
	var date  = document.getElementsByClassName("value")[17].innerText;
	if (date === "") 
	{
  date = "2025-01-01";
} 
else {
	date = date.split("-").reverse().join("-");
	
}

	var time  = document.getElementsByClassName("value")[16].innerText;
if (time === "") {
  time = "10:00";
} else {
  time = time ;
}
    var fdata = date + "T" + time + ":00+06:00";
	
	var tv  = document.getElementsByClassName("value")[12].innerText;
	var router  = document.getElementsByClassName("value")[13].innerText;
	var tu  = document.getElementsByClassName("value")[19].innerText;
	var mont  = document.getElementsByClassName("value")[20].innerText;
	if (mont === "Абилмуканов Данияр")
	{
     mont = "ik6@snt.kg";
} else if (mont === "Акимжанов Азамат") {
   mont = "bishkek3@snt.kg";
}  else if (mont === "Алымбеков Нурбек") {
   mont = "naryn2@snt.kg";
} else if (mont === "Волков Виталий") {
   mont = "vvolkov@snt.kg";
} else if (mont === "Гавин Максим") {
   mont = "bishkek12@snt.kg";
} else if (mont === "Гривков Тимур") {
   mont = "bishkek11@snt.kg";
} else if (mont === "Икирамов Темирлан") {
   mont = "osh1@snt.kg";
} else if (mont === "Исмаилов Сабырбек") {
   mont = "ik1@snt.kg";
} else if (mont === "Казакалиев Арген") {
   mont = "toktogul1@snt.kg";
} else if (mont === "Капарбай уулу Мавлянбек") {
   mont = "dj1@snt.kg";
} else if (mont === "Касым у. Мирлан") {
   mont = "ik2@snt.kg";
} else if (mont === "Кенченбаев Жаныбек") {
   mont = "ik3@snt.kg";
} else if (mont === "Маджун Хусеин") {
   mont = "bishkek16@snt.kg";
} else if (mont === "Михайлов Константин") {
   mont = "bishkek1@snt.kg";
} else if (mont === "Молдожашов Азим") {
   mont = "bishkek9@snt.kg";
} else if (mont === "Молдосанов Азамат") {
   mont = "bishkek10@snt.kg";
} else if (mont === "Назаров Элназ") {
   mont = "bishkek5@snt.kg";
} else if (mont === "Нурдин у. Акматбек") {
   mont = "bishkek7@snt.kg";
} else if (mont === "Сабыралы уулу Максатбек") {
   mont = "bishkek6@snt.kg";
} else if (mont === "Солто у. Сталбек") {
   mont = "ik4@snt.kg";
} else if (mont === "Сыдыкбеков Темирлан") {
   mont =  "ik5@snt.kg";
} else if (mont === "Таланбек уулу Рыскелди") {
   mont = "talas1@snt.kg";
} else if (mont === "Таштанбеков Кайрат") {
   mont = "bishkek13@snt.kg";
} else if (mont === "Уметбаев Элчибек") {
   mont =  "bishkek4@snt.kg";
} else if (mont === "Чондоев Элдияр") {
   mont = "bishkek2@snt.kg";
} else if (mont === "Test Testov") {
   mont = "a.karagulov@snt.kg";
} else if (mont === "") {
   mont = "a.karagulov@snt.kg";

}
	var description  = document.getElementsByClassName("value")[25].innerText;



    var request = new XMLHttpRequest();
    request.open("GET", cont, true);
    request.responseType = "document";
    request.send();
    request.onreadystatechange = function() {
     
	    var doc = request.response;
        var name = doc.getElementsByClassName("value")[0].innerText;
		var lastname = doc.getElementsByClassName("value")[2].innerText;
		var number = doc.getElementsByClassName("value")[4].innerText;
		
	name = name + " "+ lastname;
    console.log('city: ',cont);
	console.log('city: ',city);	
	console.log('city: ',street);	
	console.log('city: ',tarif);	
	console.log('city: ',tv);
	console.log('city: ',router);
	console.log('city: ',tu);	
	console.log('city: ',mont);	
	console.log('city: ',description);
	console.log('date: ',date);
	console.log('time: ',time);
	console.log('name: ',name);
	console.log('lastname:',lastname);
	console.log('number:',number);
     
	function req(url,body) {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.responseType = 'json';
	xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Authorization", "Bearer QEVuQwFAEACUTCHbvSBLMU6+rRk02+S6IS1aRVf9vh8WCTxEVF5yVnIqppniRGs75XlyYEnLOAZV2J+VKx6AAGZOgXsm+VovwLxir4K0RVErOahFvAh0r8tTwh2HVKVGbqpIBWdRR6w=");
    xhr.send(JSON.stringify({"job_uuid": "13a151ed-7b05-68b0-5f2a-1a0fa0350a3e ", "template": {
        "name": "Подключение"
    },
            "assignee": {
                "worker": {
                    "email": mont
                }},
            "scheduled_at": fdata,

            "custom_fields": [
                {
                    "name": "Тариф",
                    "value": {"name": tarif}
                },

                {"name": "Установка ТВ",
                 "value": {"name": tv}
                 },

                {"name": "Установка роутера",
                 "value": {"name": router}

                 },
                {"name": "ТУ",
                 "value": tu

                 }
            ],
            "description": description,
            "address": {"formatted": city +" "+ street},
            "contacts": [
                {
                    "name": name ,
                    "value": number,
                    "type": "phone"
                }
            ],
            },));
	
			if (xhr.status === 200) {
				
             alert("успешно",xhr.status);
			 console.log(xhr.status)
          } else {
			 
			   console.log(xhr.status)
            alert(" не успешно",xhr.status);
          }
			
}   
 req('https://api.planadoapp.com/v2/jobs'); 
	 
    }



})



btn3.addEventListener('click', function(){
	
	var cont = document.getElementsByClassName("value")[2].innerText;
		if (cont === "") 
	{
  cont  = "http://10.1.9.109/index.php?module=Contacts&view=Detail&record=586599"
} else {
  cont = document.querySelectorAll('	#detailView > div > div > div.span7 > div.summaryView.row-fluid > div > table > tbody > tr:nth-child(3) > td.fieldValue > div > span > a')[0].href;
		
}
	
	var city  = document.getElementsByClassName("value")[4].innerText;
	var street  = document.getElementsByClassName("value")[5].innerText;
	var tarif  = document.getElementsByClassName("value")[11].innerText;
	var date  = document.getElementsByClassName("value")[17].innerText;
	if (date === "") 
	{
  date = "2025-01-01";
} 
else {
	date = date.split("-").reverse().join("-");
	
}

	var time  = document.getElementsByClassName("value")[16].innerText;
if (time === "") {
  time = "10:00";
} else {
  time = time ;
}
    var fdata = date + "T" + time + ":00+06:00";
	
	var tv  = document.getElementsByClassName("value")[12].innerText;
	var router  = document.getElementsByClassName("value")[13].innerText;
	var tu  = document.getElementsByClassName("value")[19].innerText;
	var mont  = document.getElementsByClassName("value")[20].innerText;
	if (mont === "Абилмуканов Данияр")
	{
     mont = "ik6@snt.kg";
} else if (mont === "Акимжанов Азамат") {
   mont = "bishkek3@snt.kg";
}  else if (mont === "Алымбеков Нурбек") {
   mont = "naryn2@snt.kg";
} else if (mont === "Волков Виталий") {
   mont = "vvolkov@snt.kg";
} else if (mont === "Гавин Максим") {
   mont = "bishkek12@snt.kg";
} else if (mont === "Гривков Тимур") {
   mont = "bishkek11@snt.kg";
} else if (mont === "Икирамов Темирлан") {
   mont = "osh1@snt.kg";
} else if (mont === "Исмаилов Сабырбек") {
   mont = "ik1@snt.kg";
} else if (mont === "Казакалиев Арген") {
   mont = "toktogul1@snt.kg";
} else if (mont === "Капарбай уулу Мавлянбек") {
   mont = "dj1@snt.kg";
} else if (mont === "Касым у. Мирлан") {
   mont = "ik2@snt.kg";
} else if (mont === "Кенченбаев Жаныбек") {
   mont = "ik3@snt.kg";
} else if (mont === "Маджун Хусеин") {
   mont = "bishkek16@snt.kg";
} else if (mont === "Михайлов Константин") {
   mont = "bishkek1@snt.kg";
} else if (mont === "Молдожашов Азим") {
   mont = "bishkek9@snt.kg";
} else if (mont === "Молдосанов Азамат") {
   mont = "bishkek10@snt.kg";
} else if (mont === "Назаров Элназ") {
   mont = "bishkek5@snt.kg";
} else if (mont === "Нурдин у. Акматбек") {
   mont = "bishkek7@snt.kg";
} else if (mont === "Сабыралы уулу Максатбек") {
   mont = "bishkek6@snt.kg";
} else if (mont === "Солто у. Сталбек") {
   mont = "ik4@snt.kg";
} else if (mont === "Сыдыкбеков Темирлан") {
   mont =  "ik5@snt.kg";
} else if (mont === "Таланбек уулу Рыскелди") {
   mont = "talas1@snt.kg";
} else if (mont === "Таштанбеков Кайрат") {
   mont = "bishkek13@snt.kg";
} else if (mont === "Уметбаев Элчибек") {
   mont =  "bishkek4@snt.kg";
} else if (mont === "Чондоев Элдияр") {
   mont = "bishkek2@snt.kg";
} else if (mont === "Test Testov") {
   mont = "a.karagulov@snt.kg";
} else if (mont === "") {
   mont = "a.karagulov@snt.kg";

}
	var description  = document.getElementsByClassName("value")[25].innerText;



    var request = new XMLHttpRequest();
    request.open("GET", cont, true);
    request.responseType = "document";
    request.send();
    request.onreadystatechange = function() {
     
	    var doc = request.response;
        var name = doc.getElementsByClassName("value")[0].innerText;
		var lastname = doc.getElementsByClassName("value")[2].innerText;
		var number = doc.getElementsByClassName("value")[4].innerText;
		
	name = name + " "+ lastname;
    console.log('city: ',cont);
	console.log('city: ',city);	
	console.log('city: ',street);	
	console.log('city: ',tarif);	
	console.log('city: ',tv);
	console.log('city: ',router);
	console.log('city: ',tu);	
	console.log('city: ',mont);	
	console.log('city: ',description);
	console.log('date: ',date);
	console.log('time: ',time);
	console.log('name: ',name);
	console.log('lastname:',lastname);
	console.log('number:',number);
     
	function req(url,body) {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.responseType = 'json';
	xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Authorization", "Bearer QEVuQwFAEACUTCHbvSBLMU6+rRk02+S6IS1aRVf9vh8WCTxEVF5yVnIqppniRGs75XlyYEnLOAZV2J+VKx6AAGZOgXsm+VovwLxir4K0RVErOahFvAh0r8tTwh2HVKVGbqpIBWdRR6w=");
    xhr.send(JSON.stringify({"job_uuid": "13a151ed-7b05-68b0-5f2a-1a0fa0350a3e ", "template": {
        "name": "Смена технологии"
    },
            "assignee": {
                "worker": {
                    "email": mont
                }},
            "scheduled_at": fdata,

            "custom_fields": [
                {
                    "name": "Тариф",
                    "value": {"name": tarif}
                },

                {"name": "Установка ТВ",
                 "value": {"name": tv}
                 },

                {"name": "Установка роутера",
                 "value": {"name": router}

                 },
                {"name": "ТУ",
                 "value": tu

                 }
            ],
            "description": description,
            "address": {"formatted": city +" "+ street},
            "contacts": [
                {
                    "name": name ,
                    "value": number,
                    "type": "phone"
                }
            ],
            },));
	
			if (xhr.status === 200) {
				
             alert("успешно",xhr.status);
			 console.log(xhr.status)
          } else {
			 
			   console.log(xhr.status)
            alert(" не успешно",xhr.status);
          }
			
}   
 req('https://api.planadoapp.com/v2/jobs'); 
	 
    }



})









var tbd=document.querySelector('#detailView > div > div > div.span5 > div:nth-child(3)');
var trs=document.createElement('tr');
var tds=document.createElement('td');
var tds1=document.createElement('td');


tbd.appendChild(trs);
trs.appendChild(tds);
trs.appendChild(tds1);



var type  = document.getElementsByClassName("value")[6].innerText;
if (type === "Подключение")
	{
		tds1.appendChild(btn1);
} else if (type === "Установка ТВ") 
{
 tds.appendChild(btn);
} 
 else if (type === "Техпод") 
 {
tds.appendChild(btn2);
 }















