package com.foodies.serviceImpl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.foodies.daos.MenuDao;
import com.foodies.daos.Menu_TypeDao;
import com.foodies.entity.Menu;
import com.foodies.entity.MenuType;
import com.foodies.model.MenuDto;
import com.foodies.util.StorageService;

@Transactional
@Service
public class MenuServiceImpl {
	@Autowired
	private MenuDao menuDao;
	
	@Autowired
	private Menu_TypeDao menuTypeDao;
	@Autowired
	private StorageService storageService;

	 
	public List<Menu> findAll() {
			List<Menu> menuList = menuDao.findAll();
			return menuList;
		}
	
	public Optional<Menu> findById(int id) {
		Optional<Menu> menu = menuDao.findById(id);
		System.out.println(menu);
		System.out.println("here" + id);
		System.out.println(menu);
		return menu;
	}
	 
	public String deleteMenu(int id) {
		menuDao.deleteById(id);
		return "Menu Deleted successfully";
	}
	 
	public Menu editMenu(Menu menuDto , int id) {
		Menu menu = menuDao.getById(id);

		menu.setMenuName(menuDto.getMenuName());
		menu.setDescription(menuDto.getDescription());
		menu.setPrice(menuDto.getPrice());
		return menuDao.save(menu);

	}


	 
	public Menu saveMenu(Menu menu, MultipartFile imageName) {
		String fileName = storageService.store(imageName);
		menu.setImageName(fileName);
		return menuDao.save(menu);
	}
	 
	public Menu addMenu(Menu menu, MultipartFile imageName , int menuTypeid) {
		String image = storageService.store(imageName);
		menu.setImageName(image);
		Optional<MenuType> menuType = menuTypeDao.findById(menuTypeid);
		if(menuType.isPresent()) {
			menuType.get().addMenu(menu);
			return menuDao.save(menu);
		}
		System.out.println("Saving Entity");
		return menuDao.save(menu);
	}

	public List<Menu> findAllByType(int menuTypeid) {
		List<Menu> list=menuDao.findAllByType(menuTypeid);
		return list;
	}

}
