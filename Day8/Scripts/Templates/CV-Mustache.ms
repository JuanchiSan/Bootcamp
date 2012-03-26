
{{#Sections}}
    <div data-role='page' id='page1'>
        <header data-role='header'>
            <h3>CONTACT INFORMATION</h3>
        </header> 
        <div data-role='content'>  
            Name : {{name}}<br>
            Address : {{address}}<br>
            Telephone : {{telephone}}<br>
            Cell Phone : {{cellphone}}<br>
            Email : {{email}}
        </div>
    </div>
    <div data-role='page' id='page2'>
        <header data-role='header'>
            <h3>PERSONAL INFORMATION</h3><br>
        </header>
        <div data-role='content'>   
            Date of Birth : {{dateBirth}}<br>
            Place of Birth : {{placeBirth}}<br>
            Citizenship : {{citizen}}<br>
            Sex : {{sex}}<br>
        </div>
    </div>
{{/Sections}}
{{#HSections}}
    <div data-role='page' id='page3'>
        <header data-role='header'>
            <h3>EMPLOYMENT HISTORY</h3><br>
        </header>
        <div data-role='content'>
            <ul>
                {{#Companies}}
                    <li>{{Company}} - {{rol}} - {{period}}</li>
                {{/Companies}}
            </ul>
        </div>
    </div>
    <div data-role='page' id='page4'>
        <header data-role='header'>
            <h3>EDUCATION</h3><br>
        </header>
        <div data-role='content'>
            <ul>
                {{#Education}}
                    <li>{{Institution}} - {{degree}} - {{Eperiod}}</li>
                {{/Education}}
            </ul>
        </div>
    </div>
    <div data-role='page' id='page4'>
        <header data-role='header'>
            <h3>PROFESSIONAL QUALIFICATIONS</h3><br>
        </header>
        <div data-role='content'>
            Certifications and Accreditations : <br>
            <ul>
                {{#Certifications}}
                    <li>{{Institution}} - {{degree}} - {{Eperiod}}</li>
                {{/Certifications}}
            </ul>
            Computer Skills : {{ComputerSkill}}<br>
        </div>
    </div>
{{/HSections}}      