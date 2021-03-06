// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_self
//= require rails-ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require react-server
//= require_tree .


// Setup React in global scope
var React = window.React = require('react');
var ReactDOM = window.ReactDOM = require('react-dom');
window.$ = window.jQuery = require('jquery')
require('jquery-ujs')
window.axios = require('axios');
window.d3 = require('d3');
window.c3 = require('c3');
