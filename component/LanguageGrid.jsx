import React from 'react';

const LanguageGrid = () => {
  // Sample list of languages (you can replace with your own data)
  // const languages = [
  //   'JavaScript',
  //   'Python',
  //   'Java',
  //   'Ruby',
  //   'C++',
  //   'Go',
  //   'Swift',
  //   'TypeScript',
  //   'PHP',
  //   'Rust',
  //   'Kotlin',
  //   'C#',
  //   'HTML/CSS',
  // ];

  return (
    <div className="lgrid">
      <div className="lgrid-txt">
        <h2 className="lgrid-head">Heading on the Left</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint quibusdam earum ea tempora iure repellendus officiis consequatur eaque, ad nisi aut. Veritatis at minima accusamus libero? Inventore minus repellat itaque maiores nesciunt totam in iste, numquam reprehenderit quos voluptate nam dolores exercitationem? Vitae tenetur exercitationem distinctio ducimus provident unde iste! Quam, hic asperiores! Quam, repellendus hic! Reiciendis accusamus non quia quasi eveniet soluta rerum quae facilis asperiores itaque odio, repellendus esse velit sapiente dolores, voluptatum quas, harum ducimus? Officia dignissimos sed in a sapiente odit minima optio temporibus velit dolores! Numquam culpa quas, at et exercitationem laudantium ipsa quo!
        </p>
        {/* Additional content on the left can be added here */}
      </div>
      <div className="lgrid-lang">
        {/* <div className="">
          {languages.map((language, index) => (
            <div key={index} className="langbox">
              {language}
            </div>
          ))}
        </div> */}
        <ul>
          <li>Chinese</li>
          <li>French</li>
          <li>Mandarin</li>
          <li>German</li>
          <li>Japanese</li>
          <li>Spanish</li>
          <li>Hebrew</li>
          <li>Korean</li>
          <li>Dutch</li>
          <li>Indonesian</li>
          <li>Hungarian</li>
          <li>Italian</li>
          <li>Portuguese</li>
          <li>Norwegian</li>
          <li>Russian</li>
          <li>Arabia</li>
          <li>Turkish</li>
          <li>Vietnamese</li>
          <li>Thai</li>
          <li>Czech</li>
          <li>Tagakong</li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageGrid;
