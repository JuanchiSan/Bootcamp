var tMustache = "<div>\
                    {{#Sections}}<p>Name: {{name}}</p>\
                    <p>Address: {{address}}</p>\
                    <p>Telephone: {{telephone}}</p>\
                    <p>Cell Phone: {{cellphone}}</p>\
                    <p>Email: {{email}}</p>\
                    <p>Date of Birth: {{dateBirth}}</p>\
                    <p>Place of Birth: {{placeBirth}}</p>\
                    <p>Citizenship: {{citizen}}</p>\
                    <p>Sex: {{sex}}</p>\
                    {{#Education}}<ul data-role='listview' data-theme='d' id='EduList'>\
                        <li><p>Institution: {{einstitution}}</p>\
                        <p>Degree: {{edegree}}</p>\
                        <p>Period: {{eperiod}}</p>\
                        </li></ul>{{/Education}}{{/Sections}}</div>";

var tUnderscore = "<div>\
                    <p>Name: <%=Sections.name%></p>\
                    <p>Address: <%=Sections.address%></p>\
                    <p>Telephone: <%=Sections.telephone%></p>\
                    <p>Cell Phone: <%=Sections.cellphone%></p>\
                    <p>Email: <%=Sections.email%></p>\
                    <p>Date of Birth: <%=Sections.dateBirth%></p>\
                    <p>Place of Birth: <%=Sections.placeBirth%></p>\
                    <p>Citizenship: <%=Sections.citizen%></p>\
                    <p>Sex: <%=Sections.sex%></p>\
                    <ul data-role='listview' data-theme='d' id='EduList'>\
                    <% _.each(Sections.Education, function(einstitution,edegree,eperiod){%>\
                    <li><p>Institution: <% print(Sections.Education.einstitution);%></p>\
                        <p>Degree: <%=Sections.Education.edegree%></p>\
                        <p>Period: <%=Sections.Education.eperiod%></p>\
                    </li><%});%></ul></div>";

var tjsmart = "<div>\
                    {{#Sections}}<p>Name: {{name}}</p>\
                    <p>Address: {{address}}</p>\
                    <p>Telephone: {{telephone}}</p>\
                    <p>Cell Phone: {{cellphone}}</p>\
                    <p>Email: {{email}}</p>\
                    <p>Date of Birth: {{dateBirth}}</p>\
                    <p>Place of Birth: {{placeBirth}}</p>\
                    <p>Citizenship: {{citizen}}</p>\
                    <p>Sex: {{sex}}</p>\
                    {{#Education}}<ul data-role='listview' data-theme='d' id='EduList'>\
                        <li><p>Institution: {{einstitution}}</p>\
                        <p>Degree: {{edegree}}</p>\
                        <p>Period: {{eperiod}}</p>\
                        </li></ul>{{/Education}}{{/Sections}}</div>";

$(document).ready(function() {
var html1 = Mustache.render(tMustache, data);
$('#template1').html(html1);
var html2 = _.template(tUnderscore, data);
$('#template2').html(html2);

 });