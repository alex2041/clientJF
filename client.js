// navbar
var ContNavAdm =  React.DOM.div({ className: 'navbar' }, React.DOM.ul(null,
                    React.DOM.li({ className: 'active' }, React.DOM.a({ href: '#' }, 'Расписание')),
                    React.DOM.li(null, React.DOM.a({ href: '#' }, 'Профиль')),
                    React.DOM.li(null, React.DOM.a({ href: '#' }, 'Мастера')),
                    React.DOM.li(null, React.DOM.a({ href: '#' }, 'Акции')),
                    React.DOM.li(null, React.DOM.a({ href: '#' }, 'Фото'))
                      )
                  );

var ContNavMast = React.DOM.div({ className: 'navbar' }, React.DOM.ul(null,
                    React.DOM.li({ className: 'active' }, React.DOM.a(null, 'Расписание')),
                    React.DOM.li(null, React.DOM.a(null, 'Профиль')),
                    React.DOM.li(null, React.DOM.a(null, 'Фото'))
                      )
                  );

var Logo = React.DOM.div({ className: 'logo' }, React.DOM.a(null,
             React.DOM.img({ src: "img/logo.png"})
           ));

var Icon =  React.DOM.div({ className: 'icon' }, React.DOM.ul(null,
              React.DOM.li(null, React.DOM.a({ href: '#' }, React.DOM.img({ src: "img/search.png" }))),
              React.DOM.li(null, React.DOM.a({ href: '#' }, React.DOM.img({ src: "img/chat.png" }))),
              React.DOM.li(null, React.DOM.a({ href: '#' }, React.DOM.img({ src: "img/bell.png" })))
              )
            );

var Nav = React.DOM.nav({ className: 'nav' }, Logo, ContNavAdm, Icon);


// leftpanel

var SalonTs = React.DOM.div({ className: 'salonTs' },
                React.DOM.div({ className: 'salonTsImgCircl' },
                React.DOM.a({ href: '#' }, React.DOM.img({ src: "img/logoSalon.png" }))),
                React.DOM.div({ className: 'salonTsInfo' },
                  React.DOM.p({ className: 'salonTsTitle' }, 'Loream Ipusm'), 
                  React.DOM.p({ className: 'salonTsValue' }, 'salon'))
              );
var MasterTs =  React.DOM.div({ className: 'masterTs' },
                  React.DOM.div({ className: 'masterTsImgCircl' },
                  React.DOM.a({ href: '#' }, React.DOM.img({ src: "img/logoSalon.png" }))),
                  React.DOM.div({ className: 'masterTsInfo' },
                    React.DOM.p({ className: 'masterTsTitle' }, 'Loream Ipusm'), 
                    React.DOM.p({ className: 'masterTsValue' }, 'master')),
                  React.DOM.div({ className: 'clear' })
                );

var  SalonProf = React.DOM.div({ className: 'salonProf' },
                  React.DOM.div({ className: 'salonProfImg' },
                  React.DOM.a({ href: '#' }, React.DOM.img({ src: "img/logoSalon.png" }))),
                  React.DOM.div({ className: 'salonPhone' },
                    React.DOM.p(null, ' +5 343 563 23 41'),
                    React.DOM.p(null, ' +5 343 563 23 41')
                  ),
                  React.DOM.div({ className: 'reviews' },
                    React.DOM.img({ src: "img/chat.png" }),
                    React.DOM.span(null, '141 отзыв')
                  )
                );




// content

var ContentData = React.DOM.div({ className: 'сontentData'},
                    React.DOM.div({ className: 'cdInfo'}, 
                      React.DOM.ul(null,
                        React.DOM.li({ className: 'wc'}, 'Архив записей'),
                        React.DOM.li({ className: 'bc'}, 'Записи на прием'),
                        React.DOM.li({ className: 'rc'}, 'Заявки на прием')
                      )
                    ),
                    React.DOM.div({ className: 'cdDate'},
                      React.DOM.div({ className: 'cdDfull'},
                        React.DOM.p(null, '6 сентября 2015')
                      ),
                      React.DOM.div({ className: 'cdDtime'}, 
                        React.DOM.p(null, '10:41')
                      ),
                      React.DOM.div({ className: 'cdDvalue'},
                        React.DOM.span(null, 'день'),
                        React.DOM.span({ className: 'cdbc' }, 'неделя'),
                        React.DOM.span(null, 'месяц')
                      )
                    )
              );


var ContentTop = React.DOM.div({ className: 'contentTop' },
                React.DOM.div({ className: 'salonTsImgCircl' },
                React.DOM.a({ href: '#' }, React.DOM.img({ src: "img/logoSalon.png" }))),
                React.DOM.div({ className: 'ContentTopInfo' },
                  React.DOM.p({ className: 'ContentTopTitle' }, 'Loream Ipusm'), 
                  React.DOM.p({ className: 'ContentTopValue' }, 'salon'))
              );






var ContentCalendar = React.DOM.table({ className: 'calendar' });
















var LeftPanelv1 = React.DOM.div({ className: 'leftPanelv1' }, SalonProf);

var LeftPanelv2 = React.DOM.div({ className: 'leftPanelv2' });


var Content = React.DOM.div({ className: 'content' }, ContentTop);

var app = React.DOM.div({ className: 'app' },Nav, LeftPanelv1, Content);

React.render(app, document.getElementById('app')); 