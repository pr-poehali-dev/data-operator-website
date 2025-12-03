import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Анна Ковалева',
    role: 'Senior Data Analyst',
    quote: 'Работа с данными — это возможность влиять на стратегические решения компании. Каждый день я вижу, как мои анализы помогают бизнесу расти.',
    initials: 'АК',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Михаил Петров',
    role: 'Lead Data Engineer',
    quote: 'Профессия оператора данных открывает двери в мир технологий. За 5 лет я вырос от Junior до Lead и увеличил доход в 4 раза.',
    initials: 'МП',
    color: 'bg-purple-500'
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    role: 'Data Architect',
    quote: 'Это одна из немногих профессий, где можно работать удаленно с мировыми компаниями. География больше не ограничивает карьерный рост.',
    initials: 'ЕС',
    color: 'bg-green-500'
  },
  {
    id: 4,
    name: 'Дмитрий Волков',
    role: 'BI Developer',
    quote: 'Начинал с Excel, а теперь проектирую целые системы аналитики. Профессия дает возможность постоянно развиваться и осваивать новые инструменты.',
    initials: 'ДВ',
    color: 'bg-orange-500'
  },
  {
    id: 5,
    name: 'Ольга Морозова',
    role: 'Data Scientist',
    quote: 'Данные — это новая нефть. Умение их правильно обрабатывать и интерпретировать делает специалиста незаменимым в любой отрасли.',
    initials: 'ОМ',
    color: 'bg-pink-500'
  }
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-0 shadow-lg bg-white min-h-[280px] flex items-center">
        <CardContent className="p-12">
          <div className="flex flex-col items-center text-center">
            <Avatar className={`w-20 h-20 mb-6 ${testimonials[activeIndex].color}`}>
              <AvatarFallback className="text-white text-xl font-semibold">
                {testimonials[activeIndex].initials}
              </AvatarFallback>
            </Avatar>
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 max-w-2xl">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            <div>
              <div className="font-semibold text-gray-900 text-lg">
                {testimonials[activeIndex].name}
              </div>
              <div className="text-gray-600 text-sm">
                {testimonials[activeIndex].role}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center gap-3 mt-8">
        {testimonials.map((testimonial, idx) => (
          <button
            key={testimonial.id}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 ${
              idx === activeIndex 
                ? 'w-12 h-12 ring-2 ring-blue-600 ring-offset-2' 
                : 'w-10 h-10 hover:scale-110 opacity-70 hover:opacity-100'
            }`}
          >
            <Avatar className={`w-full h-full ${testimonial.color}`}>
              <AvatarFallback className="text-white text-sm font-semibold">
                {testimonial.initials}
              </AvatarFallback>
            </Avatar>
          </button>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900">Data Operator</div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('profession')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Профессия</button>
            <button onClick={() => scrollToSection('duties')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Обязанности</button>
            <button onClick={() => scrollToSection('requirements')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Требования</button>
            <button onClick={() => scrollToSection('prospects')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Перспективы</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Оператор данных<br />и ресурсов
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Профессия будущего в области анализа данных и управления информационными потоками
            </p>
            <Button 
              onClick={() => scrollToSection('profession')} 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="profession" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">О профессии</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Оператор данных и ресурсов — специалист, который управляет информационными потоками, 
              обрабатывает большие объемы данных и обеспечивает эффективное использование цифровых ресурсов компании.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 animate-scale-in bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="TrendingUp" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">150%</h3>
                <p className="text-gray-600">Рост спроса на специалистов за последние 3 года</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 animate-scale-in bg-white" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Users" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
                <p className="text-gray-600">Активных вакансий в России</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 animate-scale-in bg-white" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">120К+</h3>
                <p className="text-gray-600">Средняя зарплата специалиста</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="duties" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Обязанности</h2>
            <p className="text-xl text-gray-600">Ключевые задачи специалиста в повседневной работе</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Database', title: 'Управление данными', desc: 'Сбор, обработка и структурирование больших объемов информации' },
              { icon: 'BarChart3', title: 'Анализ и визуализация', desc: 'Создание отчетов, дашбордов и аналитических панелей' },
              { icon: 'Shield', title: 'Обеспечение безопасности', desc: 'Контроль доступа к данным и защита информации' },
              { icon: 'RefreshCw', title: 'Оптимизация процессов', desc: 'Автоматизация рутинных операций с данными' },
              { icon: 'FileCheck', title: 'Контроль качества', desc: 'Проверка данных на актуальность и корректность' },
              { icon: 'Network', title: 'Интеграция систем', desc: 'Настройка обмена данными между различными платформами' }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Требования</h2>
            <p className="text-xl text-gray-600">Навыки и знания для успешной карьеры</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <Icon name="Code" size={28} className="text-blue-600" />
                Технические навыки
              </h3>
              <ul className="space-y-4">
                {[
                  'SQL и работа с базами данных',
                  'Python/R для анализа данных',
                  'Excel и Google Sheets на продвинутом уровне',
                  'Инструменты визуализации (Tableau, Power BI)',
                  'Понимание ETL-процессов'
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <Icon name="Brain" size={28} className="text-blue-600" />
                Личные качества
              </h3>
              <ul className="space-y-4">
                {[
                  'Внимательность к деталям',
                  'Аналитическое мышление',
                  'Умение работать с большими объемами информации',
                  'Стремление к автоматизации процессов',
                  'Коммуникативные навыки'
                ].map((quality, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{quality}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="prospects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Карьерные перспективы</h2>
            <p className="text-xl text-gray-600">Пути развития в профессии</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {[
                  { 
                    level: 'Junior', 
                    salary: '50-70К ₽', 
                    desc: 'Начальный уровень. Работа под руководством senior-специалистов, выполнение базовых задач по обработке данных',
                    icon: 'Star'
                  },
                  { 
                    level: 'Middle', 
                    salary: '90-130К ₽', 
                    desc: 'Самостоятельная работа с данными, создание отчетов, участие в проектах по оптимизации',
                    icon: 'Award'
                  },
                  { 
                    level: 'Senior', 
                    salary: '150-200К ₽', 
                    desc: 'Руководство командой, проектирование архитектуры данных, стратегическое планирование',
                    icon: 'Trophy'
                  },
                  { 
                    level: 'Lead / Architect', 
                    salary: '250К+ ₽', 
                    desc: 'Управление департаментом, разработка стратегии работы с данными на уровне компании',
                    icon: 'Crown'
                  }
                ].map((stage, idx) => (
                  <div key={idx} className="relative pl-0 md:pl-20">
                    <div className="absolute left-6 top-6 w-5 h-5 bg-blue-600 rounded-full hidden md:block"></div>
                    <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <Icon name={stage.icon} size={24} className="text-blue-600" />
                            <h3 className="text-2xl font-semibold text-gray-900">{stage.level}</h3>
                          </div>
                          <div className="text-2xl font-bold text-blue-600">{stage.salary}</div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{stage.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Мнения специалистов</h2>
            <p className="text-xl text-gray-600">Что говорят профессионалы о работе с данными</p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Есть вопросы? Мы всегда готовы помочь</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Ваше сообщение..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-32"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 text-lg font-medium transition-all hover:scale-[1.02]"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Mail" size={24} className="text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600">info@dataoperator.ru</p>
              </div>
              <div>
                <Icon name="Phone" size={24} className="text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600">+7 (495) 123-45-67</p>
              </div>
              <div>
                <Icon name="MapPin" size={24} className="text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600">Москва, Россия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="text-sm">© 2024 Data Operator. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;