import {fireEvent, render, within} from '@testing-library/react-native';
import PersonCard from '../PersonCard';
import * as Navigation from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

const useNavigationSpy = jest.spyOn(Navigation, 'useNavigation');

const props: any = {
  person: {
    id: '1',
    name: 'Luke Skywalker',
    birthYear: '19BB',
    gender: 'male',
  },
};

const renderComponent = (props: any) => {
  return render(
    <Navigation.NavigationContainer>
      <PersonCard {...props} />
    </Navigation.NavigationContainer>,
  );
};

describe('PersonCard', () => {
  beforeEach(() => {
    useNavigationSpy.mockReturnValue({navigate: jest.fn} as any);
  });

  afterEach(jest.clearAllMocks);

  it('renders', () => {
    const {getByText} = renderComponent(props);
    expect(getByText('Luke Skywalker')).toBeTruthy();
    expect(getByText('19BB')).toBeTruthy();
    expect(getByText('male')).toBeTruthy();
  });

  it('navigates to person details', () => {
    const {getByTestId} = renderComponent(props);
    const card = getByTestId('person-card');
    fireEvent.press(card);

    const navigate = useNavigationSpy.mockReturnValue({navigate: jest.fn()});
    expect(navigate).toHaveBeenCalled();
  });

  it('toggles like', () => {
    const {getByTestId} = renderComponent(props);
    const card = getByTestId('person-card');
    fireEvent.press(card);

    const likeButton = getByTestId('like-button');
    fireEvent.press(likeButton);

    expect(getByTestId('like-button')).toBeTruthy();
  });

  it('render without person', () => {
    const {getByTestId} = renderComponent({person: null});
    const personName = getByTestId('person-card');
    const personBirthYear = getByTestId('person-birth-year');
    const personGender = getByTestId('person-gender');
    expect(within(personName).queryByText('Luke Skywalker')).toBeNull();
    expect(within(personBirthYear).queryByText('19BB')).toBeNull();
    expect(within(personGender).queryByText('male')).toBeNull();
  });
});
