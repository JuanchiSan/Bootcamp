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
                    <p>Education: </p>\
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
                    <p>Education: </p>\
                    <ul data-role='listview' data-theme='d' id='EduList'>\
                    <%for(var j=0; j<Sections.Education.length;j++){ %>\
                    <%var edu = Sections.Education[j];%> \
                    <li><p>Institution: <%=edu.einstitution%></p>\
                        <p>Degree: <%=edu.edegree%></p>\
                        <p>Period: <%=edu.eperiod%></p>\
                    </li><%};%></ul></div>";

var tjsmart = "<div>\
                <p>Name: {$Sections.name}</p>\
                <p>Address: {$Sections.address}</p>\
                <p>Telephone: {$Sections.telephone}</p>\
                <p>Cell Phone: {$Sections.cellphone}</p>\
                <p>Email: {$Sections.email}</p>\
                <p>Date of Birth: {$Sections.dateBirth}</p>\
                <p>Place of Birth: {$Sections.placeBirth}</p>\
                <p>Citizenship: {$Sections.citizen}</p>\
                <p>Sex: {$Sections.sex}</p>\
                <p>Education: </p>\
                <ul data-role='listview' data-theme='d' id='EduList'>\
                    {foreach $Sections.Education as $j => $edu}\
                    <li><p>Institution: {$edu.einstitution}</p>\
                    <p>Degree: {$edu.edegree}</p>\
                    <p>Period: {$edu.eperiod}</p>\
                </li>{/foreach}</ul></div>";

$(document).ready(function() {
var html1 = Mustache.render(tMustache, data);
$('#template1').html(html1);
var html2 = _.template(tUnderscore, data);
$('#template2').html(html2);
var html3 = new jSmart(tjsmart);
var code = html3.fetch( data );
$('#template3').html(code);
 });