<template>
	<section class="topbar">
		<div class="navbar-thanhcongcu">
			<nav class="navbar navbar-expand-lg dh-mb ">
				<a href="">
					<div class="anhlogo">
					<img src="~/assets/img/logo.png" class="block_in_pc" alt="">
					</div>
				</a>
				<button class="navbar-toggler navbar-dark ml-auto bg-dark dh_mb" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse m-pc m-mb" id="navbarTogglerDemo01">

					<!-- <a class="navbar-brand" href="#">Hidden brand</a> -->
					<ul class="navbar-nav mt-2 mt-lg-0 mx-auto ">
						<li class="nav-item">
							<a class="nav-link" href="#">Giới Thiệu</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Quản lý quỹ đầu tư</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Quản Lý Tài Sản</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">kiến thức đầu tư</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">quan hệ nhà đầu tư</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">tài liệu quỹ</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Liên Hệ</a>
						</li>
					</ul>
				</div>
				<div id="wrap">
					<form action="" autocomplete="off">
						<input id="search" name="search" type="text" placeholder="Tìm Kiếm ?">
						<input id="search_submit" value="Rechercher" type="submit">
					</form>
					<div class="nn">
						<a class="login-trigger" href="#" data-target="#login" data-toggle="modal"><i class="fa fa-user-o" aria-hidden="true"></i></a>
					</div>
					<div id="login" class="modal fade" role="dialog">
						<div class="modal-dialog">

							<div class="modal-content">
								<div class="modal-body">
									<button data-dismiss="modal" class="close">&times;</button>
									<h4>Đăng Nhập</h4>
									<form>
										<input type="text" name="username" class="username form-control" placeholder=" Tài Khoản" />
										<input type="password" name="password" class="password form-control" placeholder="Mật Khẩu" />
										<input class="btn login" type="submit" value="gửi" />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="dropdown dropdown-nn">
						<div type="button" class="btn dropdown-toggle" data-toggle="dropdown">
							<img class="nn-navbar" src="~/assets/img/covn.png" href="#" style="">
						</div>
						<div class="dropdown-menu dropdown-nn-2">
							<a class="dropdown-item dropdown-nn-2-1" href="#">
								<img class="nnen" src="~/assets/img/nnen.png" alt="">
							</a>
						</div>
					</div>
			</nav>

		</div>
	</section>
</template>