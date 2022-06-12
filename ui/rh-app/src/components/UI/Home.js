export const Home = () => {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <img
          src={require("../../assets/andre.jpg")}
          alt="Foto do desenvolvedor"
          style={{
            float: "right",
            width: 150,
            heigth: 160,
            borderRadius: 10,
          }}
        />
        <img
          src={require("../../assets/julio.jpg")}
          alt="Foto do desenvolvedor"
          style={{
            float: "right",
            width: 150,
            heigth: 160,
            borderRadius: 10,
          }}
        />

        <h3 className="display-4">André Silveira de Carvalho</h3>
        <h3>RA: 2840481823005</h3>

        <h3 className="display-4">Julio Sergio dos Santos Jr.</h3>
        <h3>RA: 2840481711043</h3>

        <p style={{ fontStyle: "italic",fontSize: 18 }}>Tecnologias Utilizadas</p>
        <p className="lead">
          <a style={{ fontSize: 18, color: "#20033F" }}>React</a>
          <br />
          <a style={{ fontSize: 18, color: "#20033F" }}>Python Django</a>
          <br />
          <a style={{ fontSize: 18, color: "#20033F" }}>SQLite</a>
        </p>
        <hr className="my-4" />
        <p style={{ fontSize: 20 }}>
          <b>Tema:</b> Portal de Recursos Humanos.
        </p>

        <p style={{ fontSize: 20 }}>
          <b>Objetivo:</b> Desenvolver um sistema para realizar o CRUD.
        </p>
        <br />
        <p style={{ fontSize: 16 }}>
          <b>Disciplina:</b> Tópicos Especiais em Informática
        </p>
        <p style={{ fontSize: 16 }}>
          <b>Semestre:</b> 6º - Manhã
        </p>
        <p style={{ fontSize: 16 }}>
          <b>Professor:</b> Fabricio Gustavo Henrique
        </p>
      </div>
    </div>
  );
};
