const express = require("express");
const db = require("../db");
const axios = require("axios");
const { response } = require("express");
const { use } = require("../routes/routes");
const { off } = require("../db");

module.exports.page1 = async (req, res) => {
  res.render("page1");
};

module.exports.fetchusers = async (req, res) => {
  try {
    for (let i = 0; i < 101; i++) {
      const res = await axios.get("https://randomuser.me/api/");
      // console.log(res.data);
      const resp = JSON.stringify(res.data);
      const respo = JSON.parse(resp);
      console.log(respo.results[0]);
      const title = respo.results[0].name.title;
      const first = respo.results[0].name.first;
      const last = respo.results[0].name.last;
      const email = respo.results[0].email;
      const date = respo.results[0].dob.date;
      const age = respo.results[0].dob.age;
      const number = respo.results[0].location.street.number;
      const name = respo.results[0].location.street.name;
      const city = respo.results[0].location.city;
      const state = respo.results[0].location.state;
      const country = respo.results[0].location.country;
      const postcode = respo.results[0].location.postcode;
      const offset = respo.results[0].location.timezone.offset;
      const description = respo.results[0].location.timezone.description;
      const phone = respo.results[0].phone;
      const password = respo.results[0].login.password;
      const username = respo.results[0].login.username;
      try {
        let sql = `insert into users(title,first,last,email,date,age,number,stname,city,state,country,postcode,offset,description,phone,password,username) values('${title}','${first}','${last}','${email}','${date}',${age},${number},'${name}','${city}',
      '${state}','${country}','${postcode}','${offset}','${description}','${phone}','${password}','${username}');`;
        db.query(sql, (err, results) => {
          if (!err) console.log(results);
          else console.log(err);
        });
      } catch (e) {
        console.log(e);
      }
      console.log(title);
      console.log(first);
      console.log(last);
      console.log(email);
      console.log(date);
      console.log(age);
      console.log(number);
      console.log(name);
      console.log(city);
      console.log(state);
      console.log(country);
      console.log(postcode);
      console.log(offset);
      console.log(description);
      console.log(phone);
      console.log(password);
      console.log(username);
    }
  } catch (e) {
    console.log("ERROR", e);
  }
  res.redirect("/");
};
module.exports.deleteusers = async (req, res) => {
  try {
    let sql = `delete from users;`;
    db.query(sql, (err, results) => {
      if (!err) console.log(results);
      else console.log(err);
    });
  } catch (e) {
    console.log(e);
  }
  res.redirect("/");
};
module.exports.userdetails = async (req, res) => {
  try {
    let sql = `select*from users;`;
    db.query(sql, (err, results) => {
      if (!err) {
        res.render("page2", { results });
      } else console.log(err);
    });
  } catch (e) {
    console.log(e);
  }
};
