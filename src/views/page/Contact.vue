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

  <!-- Contacts -->
  <section id="contacts">
    <div class="container">
      <div class="row text-center mb-4">
        <div class="col">
          <h2 class="display-4 fw-bolder font-monospace">Contact Me</h2>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-md-6">
          <form>
            <div class="mb-3 text-start">
              <label for="name" class="form-label">Nama Lengkap :</label>
              <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Nama" />
            </div>
            <div class="mb-3 text-start">
              <label for="email" class="form-label">Email :</label>
              <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Nama@example.com" />
            </div>
            <div class="mb-3 text-start">
              <label for="pesan" class="form-label">Pesan :</label>
              <textarea class="form-control" id="pesan" rows="3" placeholder="Pesan"></textarea>
            </div>
            <router-link :to="{ name: 'page.thank' }" class="btn-group" role="group">
              <button type="submit" class="btn btn-primary">Kirim</button>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Akhir Contacts -->

  <!-- Footer -->
  <footer class="text-dark text-center fixed-bottom" style="background-color: #F6F54D">
    <p>Created by <a href="https://instagram.com/mhdrezaaa__?igshid=YmMyMTA2M2Y=" class="text-dark fw-bold">Muhammad Reza</a></p>
  </footer>
  <!-- Akhir Footer -->
</template>

<script>
export default {};
</script>