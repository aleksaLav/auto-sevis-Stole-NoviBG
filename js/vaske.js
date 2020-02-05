let nizVreme = new Array("Time", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM", "14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM");

function proveraImena() {
    let e = document.getElementById("name").value.trim();
    "" == e ? (document.getElementById("spanName").classList.add("crvena"), document.getElementById("spanName").innerHTML = "Field must not be blank!") : /^([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)\s?([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)?$/.test(e) ? (document.getElementById("spanName").classList.remove("crvena"), document.getElementById("spanName").innerHTML = "") : (document.getElementById("spanName").classList.add("crvena"), document.getElementById("spanName").innerHTML = "Name is not in good format!")
}

function proveraImena1() {
    let e = document.getElementById("name1").value.trim();
    "" == e ? document.getElementById("name1").style.borderBottomColor = "red" : /^([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)\s?([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)?$/.test(e) ? document.getElementById("name1").style.borderBottomColor = "green" : document.getElementById("name1").style.borderBottomColor = "red"
}

function proveraEmail() {
    let e = document.getElementById("email").value.trim();
    "" == e ? (document.getElementById("spanEmail").classList.add("crvena"), document.getElementById("spanEmail").innerHTML = "Field must not be blank!") : /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/.test(e) ? (document.getElementById("spanEmail").classList.remove("crvena"), document.getElementById("spanEmail").innerHTML = "") : (document.getElementById("spanEmail").classList.add("crvena"), document.getElementById("spanEmail").innerHTML = "Email is not in good format!")
}

function proveraEmail1() {
    let e = document.getElementById("email1").value.trim();
    "" == e ? document.getElementById("email1").style.borderBottomColor = "red" : /^[a-zA-Zčćđžš \.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/.test(e) ? document.getElementById("email1").style.borderBottomColor = "green" : document.getElementById("email1").style.borderBottomColor = "red"
}

function proveraPoruke() {
    "" == document.getElementById("message").value ? document.getElementById("message").style.borderBottomColor = "red" : document.getElementById("message").style.borderBottomColor = "green"
}

function proveraTelefona() {
    let e = document.getElementById("phone").value.trim();
    /^06[0123459]\/([\d][\d][\d])\/([\d][\d][\d][\d]?)$/.test(e) ? document.getElementById("phone").style.borderBottomColor = "green" : document.getElementById("phone").style.borderBottomColor = "red"
}

function dodajKosuCrtu() {
    let e = document.getElementById("phone").value.trim();
    3 != e.length && 7 != e.length || (e += "/"), document.getElementById("phone").value = e
}

function proveraSubject() {
    let e = document.getElementById("subject").value.trim();
    document.getElementById("subject").style.borderBottomColor = "" == e ? "red" : "green"
}

function proveraDana() {
    let e = document.getElementById("Dani");
    if (0 == e.selectedIndex) document.getElementById("spanDani").classList.add("crvena"), document.getElementById("spanDani").innerHTML = "Choose...";
    else if (5 == e.selectedIndex) {
        let e = new Array("Time", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM", "14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM"),
            t = "";
        for (let n of e) t += `<option value=${n}>${n}</option>`;
        document.getElementById("Vreme").innerHTML = t
    } else if (6 == e.selectedIndex) {
        let e = new Array("Time", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM"),
            t = "";
        for (let n of e) t += `<option value=${n}>${n}</option>`;
        document.getElementById("Vreme").innerHTML = t
    } else if (1 == e.selectedIndex || 2 == e.selectedIndex || 3 == e.selectedIndex || 4 == e.selectedIndex || 5 == e.selectedIndex) {
        let e = new Array("Time", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM", "14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM"),
            t = "";
        for (let n of e) t += `<option value=${n}>${n}</option>`;
        document.getElementById("Vreme").innerHTML = t
    } else document.getElementById("spanDani").classList.remove("crvena"), document.getElementById("spanDani").innerHTML = ""
}

function proveraVreme() {
    0 == document.getElementById("Vreme").selectedIndex ? (document.getElementById("spanVreme").classList.add("crvena"), document.getElementById("spanVreme").innerHTML = "Choose...", validno = !1) : (document.getElementById("spanVreme").classList.remove("crvena"), document.getElementById("spanVreme").innerHTML = "")
}

function proveraDoktor() {
    let e = document.getElementById("Doktori");
    0 == e.selectedIndex ? (document.getElementById("spanDoktori").classList.add("crvena"), document.getElementById("spanDoktori").innerHTML = "Choose...", validno = !1) : (document.getElementById("spanDoktori").classList.remove("crvena"), document.getElementById("spanDoktori").innerHTML = ""), 0 == !e.selectedIndex ? document.getElementById("textarea_message").innerHTML = "Greetings " + e.value : document.getElementById("textarea_message").innerHTML = ""
}

function proveraSubEmail() {
    let e = document.getElementById("mc-email").value.trim();
    "" == e ? (document.getElementById("subEmail").classList.add("crvena"), document.getElementById("subEmail").innerHTML = "Field must not be blank!") : /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/.test(e) ? (document.getElementById("subEmail").classList.remove("crvena"), document.getElementById("subEmail").innerHTML = "") : (document.getElementById("subEmail").classList.add("crvena"), document.getElementById("subEmail").innerHTML = "Email is not in good format!")
}

function provera() {
    let e = !0,
        t = [],
        n = document.getElementById("name").value.trim();
    "" == n ? (document.getElementById("spanName").classList.add("crvena"), document.getElementById("spanName").innerHTML = "Field must not be blank!", e = !1) : /^([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)\s?([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)?$/.test(n) ? (document.getElementById("spanName").classList.remove("crvena"), document.getElementById("spanName").innerHTML = "") : (document.getElementById("spanName").classList.add("crvena"), document.getElementById("spanName").innerHTML = "Name is not in good format!", e = !1);
    let d = document.getElementById("email").value.trim();
    "" == d ? (document.getElementById("spanEmail").classList.add("crvena"), document.getElementById("spanEmail").innerHTML = "Field must not be blank!", e = !1) : /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/.test(d) ? (document.getElementById("spanEmail").classList.remove("crvena"), document.getElementById("spanEmail").innerHTML = "") : (document.getElementById("spanEmail").classList.add("crvena"), document.getElementById("spanEmail").innerHTML = "Email is not in good format!", e = !1);
    let m = document.getElementById("Dani");
    0 == m.selectedIndex ? (document.getElementById("spanDani").classList.add("crvena"), document.getElementById("spanDani").innerHTML = "Choose...", e = !1) : (document.getElementById("spanDani").classList.remove("crvena"), document.getElementById("spanDani").innerHTML = "");
    let o = document.getElementById("Vreme");
    0 == o.selectedIndex ? (document.getElementById("spanVreme").classList.add("crvena"), document.getElementById("spanVreme").innerHTML = "Choose...", e = !1) : (document.getElementById("spanVreme").classList.remove("crvena"), document.getElementById("spanVreme").innerHTML = "");
    let a = document.getElementById("Doktori");
    0 == a.selectedIndex ? (document.getElementById("spanDoktori").classList.add("crvena"), document.getElementById("spanDoktori").innerHTML = "Choose...", e = !1) : (document.getElementById("spanDoktori").classList.remove("crvena"), document.getElementById("spanDoktori").innerHTML = "");
    let l = document.getElementById("textarea_message");
    "" == l.value ? (document.getElementById("spanMessage").classList.add("crvena"), document.getElementById("spanMessage").innerHTML = "Field must not be blank!", e = !1) : (document.getElementById("spanMessage").classList.remove("crvena"), document.getElementById("spanMessage").innerHTML = ""), e && (t.push(n), t.push(d), t.push(m.value), t.push(o.value), t.push(a.value), t.push(l.value), console.log(t), alert("Successfuly sent!"))
}

function provera1() {
    let e = !0,
        t = document.getElementById("name1").value.trim();
    "" == t ? (document.getElementById("name1").style.borderBottomColor = "red", e = !1) : /^([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)\s?([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)?$/.test(t) ? document.getElementById("name1").style.borderBottomColor = "green" : (document.getElementById("name1").style.borderBottomColor = "red", e = !1);
    let n = document.getElementById("email1").value.trim();
    "" == n ? (document.getElementById("email1").style.borderBottomColor = "red", e = !1) : /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/.test(n) ? document.getElementById("email1").style.borderBottomColor = "green" : (document.getElementById("email1").style.borderBottomColor = "red", e = !1), "" == document.getElementById("message").value ? (document.getElementById("message").style.borderBottomColor = "red", e = !1) : document.getElementById("message").style.borderBottomColor = "green";
    let d = document.getElementById("subject").value.trim();
    /^[A-ZČĆŽĐŠŽ][a-zčćšđžš]+$/.test(d) ? document.getElementById("subject").style.borderBottomColor = "green" : (document.getElementById("subject").style.borderBottomColor = "red", e = !1);
    let m = document.getElementById("phone").value.trim();
    /^06[0123459]\/([\d][\d][\d])\/([\d][\d][\d][\d]?)$/.test(m) ? document.getElementById("phone").style.borderBottomColor = "green" : (document.getElementById("phone").style.borderBottomColor = "red", e = !1), e && alert("Message is successufly sent!")
}

function provera2() {
    let e = !0,
        t = document.getElementById("mc-email").value.trim();
    "" == t ? (document.getElementById("subEmail").classList.add("crvena"), document.getElementById("subEmail").innerHTML = "Field must not be blank!", e = !1) : /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/.test(t) ? (document.getElementById("subEmail").classList.remove("crvena"), document.getElementById("subEmail").innerHTML = "") : (document.getElementById("subEmail").classList.add("crvena"), document.getElementById("subEmail").innerHTML = "Email is not in good format!", e = !1), e && alert("You are subscribed!")
}
window.onload = function() {
    document.getElementById("btnSubmit").addEventListener("click", provera), document.getElementById("name").addEventListener("blur", proveraImena), document.getElementById("email").addEventListener("blur", proveraEmail), document.getElementById("Dani").addEventListener("change", proveraDana), document.getElementById("Vreme").addEventListener("change", proveraVreme), document.getElementById("Doktori").addEventListener("change", proveraDoktor), document.getElementById("name1").addEventListener("blur", proveraImena1), document.getElementById("email1").addEventListener("blur", proveraEmail1), document.getElementById("phone").addEventListener("blur", proveraTelefona), document.getElementById("phone").addEventListener("keyup", dodajKosuCrtu), document.getElementById("message").addEventListener("blur", proveraPoruke), document.getElementById("subject").addEventListener("blur", proveraSubject), document.getElementById("submitButton").addEventListener("click", provera1), document.getElementById("mc-email").addEventListener("blur", proveraSubEmail), document.getElementById("subEmailBtn").addEventListener("click", provera2), subEmailBtn;
    let e = ["Welcome to our clinic", "We are not expensive", "Come!"],
        t = 0,
        n = document.getElementById("spanTekst");
    setInterval(function() {
        n.innerHTML = e[t], ++t == e.length && (t = 0)
    }, 2500);
    let d = new Array("Day", "Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"),
        m = "";
    for (let e of d) m += `<option value=${e}>${e}</option>`;
    document.getElementById("Dani").innerHTML += m;
    let o = "";
    for (let e of nizVreme) o += `<option value=${e}>${e}</option>`;
    document.getElementById("Vreme").innerHTML += o;
    let a = new Array("Doctor Name", "Mr.Dragan", "Mr.Paskec", "Mrs.Gloria", "Mrs.Natalia", "Mrs.Bryan", "Mrs.Matthew"),
        l = "";
    for (let e of a) l += `<option value=${e}>${e}</option>`;
    document.getElementById("Doktori").innerHTML += l
};