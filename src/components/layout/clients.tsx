import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0.2,
  columnWidth: 100,
};

const Freelance = () => {
  return (
    <Masonry masonryOptions={masonryOptions} enableResizableChildren={true}>
      <div>
        <img
          src="/static/clients/th-american.jpg"
          alt="American Comfort Solutions"
        />
      </div>
      <div>
        <img src="/static/clients/th-cca.jpg" alt="College Career Advisors" />
      </div>
      <div>
        <img
          src="/static/clients/th-charliesvision.jpg"
          alt="Charlie's Vision"
        />
      </div>
      <div>
        <img src="/static/clients/th-cosmiccart.jpg" alt="Cosmic Cart" />
      </div>
      <div>
        <img src="/static/clients/th-effective.jpg" alt="Cosmic Cart" />
      </div>
      <div>
        <img src="/static/clients/th-hinson.jpg" alt="Hinson" />
      </div>
      <div>
        <img src="/static/clients/th-iac.jpg" alt="IAC" />
      </div>
      <div>
        <img src="/static/clients/th-innovation.jpg" alt="Innovation" />
      </div>
      <div>
        <img src="/static/clients/th-invision.jpg" alt="Invision" />
      </div>
      <div>
        <img src="/static/clients/th-kimbrattain.jpg" alt="Kim Brattain" />
      </div>
      <div>
        <img src="/static/clients/th-missionfilm.jpg" alt="Mission Film" />
      </div>
      <div>
        <img src="/static/clients/th-nancy.jpg" alt="Nancy" />
      </div>
      <div>
        <img src="/static/clients/th-phase2.jpg" alt="Phase 2" />
      </div>
      <div>
        <img src="/static/clients/th-righthand.jpg" alt="Right Hand" />
      </div>
    </Masonry>
  );
};

export default Freelance;
// public / static / clients / img - american.jpg;
// public / static / clients / img - cca.jpg;
// public / static / clients / img - charliesvision.jpg;
// public / static / clients / img - cosmiccart.jpg;
// public / static / clients / img - effective.jpg;
// public / static / clients / img - hinson.jpg;
// public / static / clients / img - iac.jpg;
// public / static / clients / img - innovation.jpg;
// public / static / clients / img - invision.jpg;
// public / static / clients / img - kimbrattain.jpg;
// public / static / clients / img - missionfilm.jpg;
// public / static / clients / img - nancy.jpg;
// public / static / clients / img - phase2.jpg;
// public / static / clients / img - righthand.jpg;
