<template>
  <!-- Navbar-->
  <nav class="navbar navbar-expand-lg navbar-light shadow-sm mb-3" style="background-color: #F6F54D">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../components/logoku.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
        Ini Al-Qur'an
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'page.home' }" class="nav-link" href="#Home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'page.about' }" class="nav-link" href="#about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'page.contact' }" class="nav-link active" aria-current="page" href="#contact">Contact Me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Akhir Navbar-->

  <!-- Foto-->
  <div class="text-center">
    <img src="../components/logoku.png" class="rounded" alt="icon" width="350" />
  </div>
  <!-- Akhir Foto-->

  <!-- About-->
  <section id="about">
    <div class="container">
      <div class="row text-center mt-5">
        <div class="col">
          <h2 class="display-6">شُكْرًا</h2>
        </div>
      </div>
      <div class="row justify-content-center fs-5 text-center">
        <div class="col-md-4 fs-6">
          <p>"Terima Kasih Telah Mengirimkan Pesan. Pesan Anda Akan Segera Direspon Oleh Pihak Kami. Terima Kasih :)"</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Akhir About-->

  <!-- Footer -->
  <footer class="text-dark text-center" style="background-color: #F6F54D">
    <p>Created by <a href="https://instagram.com/mhdrezaaa__?igshid=YmMyMTA2M2Y=" class="text-dark fw-bold">Muhammad Reza</a></p>
  </footer>
  <!-- Akhir Footer -->
</template>

<script>
export default {};
</script>